import { readFile } from 'node:fs/promises';
import { join, basename, normalize } from 'node:path/posix';

export type FrontMatter = {
  title?: string;
  description?: string;
  template?: string;
  tags?: string;
  date_published?: string;
  date_updated?: string;
  author_avatar?: string;
  author_name?: string;
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
