import { normalize, dirname } from 'node:path';
import { readdir, writeFile } from 'node:fs/promises'
import {
  readMarkdownWithFrontMatter,
  unwrapString,
  stringToSlug,
} from '../shared.js'
import basic from './basic.js'
import { createCanvas, loadImage } from '@napi-rs/canvas'

export default async function (config) {
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
  const tagToLink = (t) => `<a href="${basePath}/blog/tag/${stringToSlug(t)}/">${t}</a>`;
  const tags = new Set();
  const postTagMap = {};
  const datePub = (p) => p.frontMatter.date_published;
  const sortPostsChronologically = (a, b) => datePub(b).localeCompare(datePub(a));
  const posts = (
    await Promise.all(scanResult.map(async item => {
      const {frontMatter} = await readMarkdownWithFrontMatter(inputPath, item)
      const postTags = frontMatter.tags?.split(', ') || [];
      const tagLinks = postTags.map((t)=>{tags.add(t); return t}).map(tagToLink);
      const linkRelative = normalize(`${item.replace(/index\.md$/, '')}`).replace(/\\/g, '/')
      const sourcePath = normalize(`${inputPrefix}${pathRoot}${linkRelative}${unwrapString(frontMatter.cover)}`)
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
          <p class="date">date: ${frontMatter.date_published.split('T')[0]}</p>
          <p class="author">
            <span class="author-name">author:</span>
            <img class="author-avatar" src="${basePath}/images/${unwrapString(frontMatter.author_avatar)}" alt="" />
            <span class="author-name">${frontMatter.author_name}</span>
          </p>
        </div>
      </article>`;
      const page = { thumbnail, link, tagLinks, frontMatter, content };
      postTags.forEach((tag) => {
        const slug = stringToSlug(tag);
        postTagMap[slug] = postTagMap[slug] || [];
        postTagMap[slug].push(page);
        postTagMap[slug].sort(sortPostsChronologically);
      })
      return page;
    }))
  )
    .sort(sortPostsChronologically)
    .map((page) => page.content);
  const alphabeticalTags = Object.keys(postTagMap);
  alphabeticalTags.sort((a, b) => a.localeCompare(b))
  const derivedPages = await Promise.all(alphabeticalTags.map(async (tag) => {
    const posts = postTagMap[tag].map((p) => p.content
      .replaceAll(`"${basePath}`, `"../../${basePath}`)
    );
    const description = `Posts tagged: ${tag}`;
    const tagToLink = (t) => `<a href="${basePath}/blog/tag/${stringToSlug(t)}/"${
      t === tag ? ' class="active"' : ''
    }>${t}</a>`;
    const slug = stringToSlug(tag);
    return {
      ...config,
      template: 'basic',
      path: normalize(config.path.replace('index.html', '') + 'tag/' + slug + '/index.html'),
      title: description,
      description,
      renderedContent: /* html */`
      <div class="intro window">${config.content}
        <hr />
        <p>${description}</p>
      </div>
      <div class="tags window"><h2>Tags</h2><div class="tags-nav">${[...tags.keys()].map(tagToLink).join('\n')}</div></div>
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
      <div class="tags window"><h2>Tags</h2><div class="tags-nav">${[...tags.keys()].map((t) => tagToLink(t)).join('\n')}</div></div>
      <div class="blog-list">
        ${posts.join('\n')}
      </div>
`,
    derivedPages,
  })
}
