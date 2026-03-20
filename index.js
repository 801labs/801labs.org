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
import { readMarkdownWithFrontMatter } from './shared.js';

const tempDir = 'temp';
const outputDir = 'dist';
const inputDir = 'content';
const templateDir = 'templates';

const md = markdownit({
  html: true,
});

const templateFilenames = await readdir(templateDir, { recursive: true });
const templateFunctions = await Promise.all(
  templateFilenames
    .filter((item) => item.endsWith('.js'))
    .map(async (item) => {
      // today I learned that ESM flavored imports only like url flavored paths,
      // not paths that would include the windows \ path join
      const modulePath = ['.', templateDir, item].join('/');
      const module = await import(modulePath);
      const templateFunction = (module).default;
      return [item.replace('.js', ''), templateFunction];
    })
);
const templateMap = templateFunctions.reduce((acc, [key, value]) => {
  acc[key] = value;
  return acc;
}, {});

const createPage = async (config) => {
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
  const templateConfig = {
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
  filter (source, _destination) {
    return !source.endsWith('.md');
  }
});

const discoverPages = async (scanPath) => {
  // get list files in current folder
  // if filename ends in .md, add it to the pages array
  const scanResult = await readdir(scanPath, {
    recursive: true,
  });
  const markdownPaths = scanResult.filter(
    (item) => item.endsWith('.md')
  );
  // console.log('What is markdownPaths?', markdownPaths);
  return Promise.all(markdownPaths.map(async (path) => {
    const { frontMatter, markdown } = await readMarkdownWithFrontMatter(scanPath, path);
    // console.log('What is frontMatter?', frontMatter);
    return {
      path: path.replace(/.md$/, '.html'),
      title: frontMatter.title,
      content: markdown,
      ...frontMatter,
    };
  }));
};

const pages = await discoverPages(inputDir);
const primaryPages = await Promise.all(pages.map(createPage));
const derivedPages = primaryPages.map((page) => page.derivedPages || []).flat(Infinity);
await Promise.all(derivedPages.map(createPage));

// the ol' switcheroo
await rm(outputDir, { force: true, recursive: true });
await rename(tempDir, outputDir);
