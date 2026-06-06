import { readFile, stat } from 'node:fs/promises';
import { join, basename, normalize } from 'node:path/posix';
import { loadImage } from '@napi-rs/canvas';

export const SITE_URL = 'https://801labs.org';
export const DEFAULT_COVER_IMAGE = 'images/801labs_generic_opengraph_thumbnail.webp';
export const SITE_LOGO = 'images/801labs_favicon.png';

export type FrontMatter = {
  title?: string;
  description?: string;
  template?: string;
  tags?: string;
  date_published?: string;
  date_updated?: string;
  author_avatar?: string;
  author_name?: string;
  og_type?: string;
  cover?: string;
  [key: string]: any;
};

export type Config = FrontMatter & {
  path: string;
  content: string;
  basePath: string;
  renderedContent?: string;
  derivedPages?: Config[];
};

export type TemplateOutput = Config;

export type TemplateMap = {
  [key: string]: TemplateFunction;
};

export type TemplateFunction = (config: Config, templateMap: TemplateMap) => TemplateOutput | Promise<TemplateOutput>;

export const parseFrontMatter = (frontMatterString: string): FrontMatter => {
  const result: FrontMatter = { title: '' };
  const lines = frontMatterString.split('\n');
  lines.forEach((line) => {
    const keyValueRegex = /^(.*?): (.*)/mg;
    const regexResult = keyValueRegex.exec(line.trim());
    // console.log('What is regexResult?', regexResult);
    if (!regexResult) {
      return;
    }
    const [_wholeMatch, key, value] = regexResult;
    result[key.trim()] = value.trim();
  });
  return result;
};

export type MarkdownWithFrontMatter = {
  frontMatter: FrontMatter;
  markdown: string;
  contentPath: string;
};

export const readMarkdownWithFrontMatter = async (scanPath: string, path: string): Promise<MarkdownWithFrontMatter> => {
  const inputPath = normalize(join(scanPath, path));
  const content = (await readFile(inputPath, { encoding: 'utf8' })).replaceAll('\r\n', '\n');
  // console.log('What is content?', content);
  const frontMatterRegex = /^---\n(.*?)\n---\n/s;
  const regexResult = frontMatterRegex.exec(content);
  // console.log('What is regexResult?', regexResult);
  if (!regexResult) {
    throw new Error(`Your markdown needs frontMatter!\nFile: "${inputPath}"`);
  }
  const [remove, frontMatterString] = regexResult;
  const markdown = content.replace(remove, '').trim();
  const frontMatter = parseFrontMatter(frontMatterString);
  return {
    frontMatter,
    markdown,
    contentPath: normalize(inputPath.replace(basename(inputPath), '')),
  };
}

const unwrapRegex = /^['"](.*)['"]$/;

export const unwrapString = (string: string): string => {
    const match = unwrapRegex.exec(string);
    if (!match) return string;
    return match[1];
}

export const stringToSlug = (s: string): string => s
  .toLocaleLowerCase()
  .trim()
  .replace(/[^\w\s-]/g, '')
  .replace(/[\s_-]+/g, '-')
  .replace(/^-+|-+$/g, '');

export const getCanonicalUrl = (path: string): string => {
  let cleanPath = path.replace(/\\/g, '/');
  if (cleanPath.endsWith('index.html')) {
    cleanPath = cleanPath.substring(0, cleanPath.length - 'index.html'.length);
  }
  return `${SITE_URL}/${cleanPath}`;
};

export const getImageDimensions = async (imagePath: string) => {
  try {
    await stat(imagePath);
    const image = await loadImage(imagePath);
    return { width: image.width, height: image.height };
  } catch (e) {
    // console.error(`Failed to load image: ${imagePath}`, e);
    return null;
  }
};

export const getTagLink = (tag: string, basePath: string): string =>
  /* html */ `<a href="${basePath}/blog/tag/${stringToSlug(tag)}/">${tag}</a>`;

export const getAuthorAvatarPath = (avatar: string | undefined): string => {
  if (!avatar) return '';
  return `images/${unwrapString(avatar)}`;
};
