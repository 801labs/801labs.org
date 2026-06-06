import { normalize, dirname } from 'node:path';
import { readdir, writeFile } from 'node:fs/promises'
import {
  readMarkdownWithFrontMatter,
  unwrapString,
  stringToSlug,
  getTagLink,
  DEFAULT_COVER_IMAGE,
  getAuthorAvatarPath
} from '../shared.ts'
import type { Config, TemplateFunction, TemplateMap, TemplateOutput } from '../shared.ts'
import basic from './basic.ts'
import { createCanvas, loadImage } from '@napi-rs/canvas'

const blogList: TemplateFunction = async (config: Config, templateMap: TemplateMap): Promise<TemplateOutput> => {
  const { basePath } = config;
  const pathRoot = dirname(config.path) + '/'
  const inputPrefix = `content/`
  const inputPath = `${inputPrefix}${pathRoot}`
  const outputPrefix = `temp/`
  const thumbnailSize = 512
  const width = thumbnailSize
  const height = thumbnailSize
  const indexRegex = /([/\\])index.md$/
  const scanResult = (await readdir(inputPath, {
    recursive: true
  }).catch(() => [])).filter(s => indexRegex.test(s))
  const tags = new Set<string>();

  type PostPage = {
    thumbnail: string;
    link: string;
    tagLinks: string[];
    frontMatter: any;
    content: string;
  };

  const postTagMap: { [key: string]: PostPage[] } = {};
  const datePub = (p: { frontMatter: { date_published: string } }): string => p.frontMatter.date_published;
  const sortPostsChronologically = (a: { frontMatter: { date_published: string } }, b: { frontMatter: { date_published: string } }): number => datePub(b).localeCompare(datePub(a));
  
  const postData = (
    await Promise.all(scanResult.map(async item => {
      const {frontMatter} = await readMarkdownWithFrontMatter(inputPath, item)
      const linkRelative = normalize(`${item.replace(/index\.md$/, '')}`).replace(/\\/g, '/')
      const unwrappedCover = unwrapString(frontMatter.cover || '');
      const sourcePath = unwrappedCover
        ? normalize(`${inputPrefix}${pathRoot}${linkRelative}${unwrappedCover}`)
        : normalize(`${inputPrefix}${DEFAULT_COVER_IMAGE}`);
      const canvas = createCanvas(width, height)
      const ctx = canvas.getContext('2d')
      console.log('Generating thumbnail for:', sourcePath);
      const image = await loadImage(sourcePath)
      const longerAxis = Math.max(image.width, image.height)
      if (longerAxis === image.width) {
        const ratio = image.width / image.height
        const offset = (ratio * width - width) / 2
        ctx.drawImage(image, -offset, 0, ratio * width, height)
      } else {
        const ratio = image.height / image.width
        const offset = (ratio * height - height) / 2
        ctx.drawImage(image, 0, -offset, width, ratio * height)
      }
      const thumbnailData = await canvas.encode('jpeg', 80)
      const thumbnailRelative = `${linkRelative}thumbnail.jpg`;
      await writeFile(`${outputPrefix}${pathRoot}${thumbnailRelative}`, thumbnailData);
      const link = basePath + '/blog/' + linkRelative;
      const thumbnail = `${link}thumbnail.jpg`
      
      return {
        item,
        frontMatter,
        linkRelative,
        link,
        thumbnail
      };
    }))
  );

  const posts = postData.map(post => {
      const { frontMatter, link, thumbnail } = post;
      const postTags = frontMatter.tags?.split(', ') || [];
      const tagLinks = postTags.map((t: string)=>{tags.add(t); return t}).map((t) => getTagLink(t, basePath));

      const content = /* html */ `<article class="blog-item window">
        <div class="image">
          <a href="${link}">
            <img src="${thumbnail}" alt="${frontMatter.title}" width="256" />
          </a>
        </div>
        <div class="card-body">
          <h3><a href="${link}">${frontMatter.title}</a></h3>
          ${
        frontMatter.description
          ? '<p class="description"><span>description: </span><a href="' + link + '">' + frontMatter.description + '</a></p>'
          : ''
      }
          ${
        frontMatter.tags
          ? '<p class="tags">tags: ' + tagLinks.join(', ') + '</p>'
          : ''
      }
          <p class="date">date: ${frontMatter.date_published?.split('T')[0]}</p>
          <p class="author">
            <span class="author-name">author:</span>
            <img class="author-avatar" src="${basePath}/${getAuthorAvatarPath(frontMatter.author_avatar)}" alt="" />
            <span class="author-name">${frontMatter.author_name}</span>
          </p>
        </div>
      </article>`;
      const page: PostPage = { thumbnail, link, tagLinks, frontMatter, content };
      postTags.forEach((tag: string) => {
        const slug = stringToSlug(tag);
        postTagMap[slug] = postTagMap[slug] || [];
        postTagMap[slug].push(page);
        postTagMap[slug].sort(sortPostsChronologically);
      })
      return page;
    })
    .sort(sortPostsChronologically)
    .map((page) => page.content);
  const alphabeticalTags = Object.keys(postTagMap);
  alphabeticalTags.sort((a, b) => a.localeCompare(b))
  const derivedPages: Config[] = await Promise.all(alphabeticalTags.map(async (tag) => {
    const slug = stringToSlug(tag);
    const derivedPath = normalize(config.path.replace('index.html', '') + 'tag/' + slug + '/index.html');
    const depth = derivedPath.split(/[/\\]/).length - 1;
    const derivedBasePath = depth === 0 ? '.' : new Array(depth).fill('..').join('/');

    const posts = postTagMap[tag].map((p) => p.content
      .replaceAll(`"${basePath}`, `"${derivedBasePath}`)
    );
    const description = `Posts tagged: ${tag}`;
    const tagToLinkWithActive = (t: string): string => {
        const s = stringToSlug(t);
        return /* html */ `<a href="${derivedBasePath}/blog/tag/${s}/"${
            s === slug ? ' class="active"' : ''
        }>${t}</a>`
    };
    return {
      ...config,
      template: 'basic',
      path: derivedPath,
      title: description,
      description,
      renderedContent: /* html */`
      <div class="intro window">${config.content}
        <hr />
        <p>${description}</p>
      </div>
      <div class="intro window tags"><h2>Tags</h2><div class="tags-nav">${[...tags.keys()].map(tagToLinkWithActive).join('\n')}</div></div>
      <div class="blog-list">
        ${posts.join('\n')}
      </div>
`,
    };
  }));
  return basic({
    ...config,
    content: /* html */`
      <div class="intro window">${config.content}</div>
      <div class="intro window tags"><h2>Tags</h2><div class="tags-nav">${[...tags.keys()].map((t) => getTagLink(t, basePath)).join('\n')}</div></div>
      <div class="blog-list">
        ${posts.join('\n')}
      </div>
`,
    derivedPages,
  }, templateMap)
}

export default blogList;
