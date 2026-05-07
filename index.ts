import {
  mkdir,
  writeFile,
  readdir,
  rm,
  cp,
  rename,
} from 'node:fs/promises';
import { join, sep, dirname } from 'node:path';
import markdownit from 'markdown-it';
import { readMarkdownWithFrontMatter } from './shared.ts';
import type { Config, TemplateMap, TemplateFunction, TemplateOutput } from './shared.ts';

const tempDir = 'temp';
const outputDir = 'dist';
const inputDir = 'content';
const templateDir = 'templates';

const md = markdownit({
  html: true,
});

const templateFilenames = await readdir(templateDir, { recursive: true });
const templateFunctions: [string, TemplateFunction][] = await Promise.all(
  templateFilenames
    .filter((item: string) => item.endsWith('.ts'))
    .map(async (item: string) => {
      // today I learned that ESM flavored imports only like url flavored paths,
      // not paths that would include the windows \ path join
      const modulePath = ['.', templateDir, item].join('/');
      const module = await import(modulePath);
      const templateFunction = (module).default as TemplateFunction;
      return [item.replace('.ts', ''), templateFunction] as [string, TemplateFunction];
    })
);
const templateMap: TemplateMap = templateFunctions.reduce((acc: TemplateMap, [key, value]) => {
  acc[key] = value;
  return acc;
}, {});

const createPage = async (config: Config): Promise<TemplateOutput> => {
  const templateName = config.template || (config.path.startsWith('blog') ? 'blog_item' : 'basic');
  const pageTemplate = templateMap[templateName];
  if (!pageTemplate) {
    throw new Error(`No template found named: "${templateName}"`);
  }
  const prefixedPath = join(tempDir, config.path);
  const folderPath = dirname(prefixedPath);
  await mkdir(
    folderPath,
    {
      recursive: true,
    },
  );
  const depth = config.path.split(sep).length - 1;
  const basePath = depth === 0 ? '.' : new Array(depth).fill('..').join('/');
  const content = config.renderedContent
    ? config.renderedContent
    : md.render(config.content);
  const templateConfig: Config = {
    ...config,
    content,
    basePath,
  };
  const output = await pageTemplate(templateConfig, templateMap);
  await writeFile(prefixedPath, output.content);
  return output;
};

await rm(tempDir, { force: true, recursive: true });
await cp(inputDir, tempDir, {
  recursive: true,
  filter (source: string, _destination: string) {
    return !source.endsWith('.md');
  }
});

const discoverPages = async (scanPath: string): Promise<Config[]> => {
  // get list files in current folder
  // if filename ends in .md, add it to the pages array
  const scanResult = await readdir(scanPath, {
    recursive: true,
  });
  const markdownPaths = scanResult.filter(
    (item: string) => item.endsWith('.md')
  );
  // console.log('What is markdownPaths?', markdownPaths);
  return Promise.all(markdownPaths.map(async (path: string) => {
    const { frontMatter, markdown } = await readMarkdownWithFrontMatter(scanPath, path);
    // console.log('What is frontMatter?', frontMatter);
    return {
      path: path.replace(/.md$/, '.html'),
      title: frontMatter.title,
      content: markdown,
      basePath: '', // Will be calculated in createPage
      ...frontMatter,
    } as Config;
  }));
};

const pages = await discoverPages(inputDir);
const primaryPages = await Promise.all(pages.map(createPage));
const derivedPages = primaryPages.map((page) => page.derivedPages || []).flat(Infinity) as unknown as Config[];
await Promise.all(derivedPages.map(createPage));

// the ol' switcheroo
await rm(outputDir, { force: true, recursive: true });
await rename(tempDir, outputDir);
