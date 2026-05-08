import { join, dirname } from 'node:path/posix';
import { normalize } from 'node:path';
import { getCanonicalUrl, getImageDimensions, unwrapString, DEFAULT_COVER_IMAGE, SITE_LOGO } from '../shared.ts';
import type { Config, TemplateFunction, TemplateMap } from '../shared.ts';

const basic: TemplateFunction = async (config: Config, _templateMap: TemplateMap) => {
  const path = config.path.replace(/\\/g, '/');
  const {
    title,
    content,
    basePath,
    description,
    derivedPages,
    cover,
  } = config;

  const canonicalUrl = getCanonicalUrl(path);
  const canonicalLogoUrl = getCanonicalUrl(SITE_LOGO);

  const effectiveCover = cover || DEFAULT_COVER_IMAGE;

  let headerImageMeta = '';
  if (effectiveCover) {
    const unwrappedCover = unwrapString(effectiveCover);
    let posixImagePath: string;
    if (unwrappedCover.startsWith('/') || !cover) {
      posixImagePath = unwrappedCover.startsWith('/') ? unwrappedCover.slice(1) : unwrappedCover;
    } else {
      const contentDirPath = dirname(path);
      posixImagePath = join(contentDirPath, unwrappedCover);
    }
    const imagePath = normalize(join('content', posixImagePath));
    const dimensions = await getImageDimensions(imagePath);
    const canonicalImageUrl = getCanonicalUrl(posixImagePath);

    headerImageMeta = /* html */ `
    <meta property="og:image" content="${canonicalImageUrl}" />
    ${dimensions ? /* html */ `<meta property="og:image:width" content="${dimensions.width}" />
    <meta property="og:image:height" content="${dimensions.height}" />` : ''}`;
  }

  let authorMeta = '';
  if (config.author_name) {
    authorMeta += /* html */ `\n    <meta property="article:author" content="${config.author_name}" />`;
  }

  let ogTypeMeta = '';
  if (config.og_type) {
    ogTypeMeta = /* html */ `\n    <meta property="og:type" content="${config.og_type}" />`;
  }

  return {
    ...config,
    derivedPages,
    content: /* html */ `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" type="text/css" href="${basePath}/styles.css" />
    <title>801 Labs: ${title}</title>
    <meta property="og:title" content="801 Labs: ${title}" />${ogTypeMeta}
    <meta name="twitter:card" content="summary_large_image">
    <meta property="og:logo" content="${canonicalLogoUrl}" />
    <link rel="icon" type="image/png" href="${basePath}/${SITE_LOGO}" />
${ config['meta-noindex'] ? '    <meta name="robots" content="noindex"/>' : ''}
${ description ? '    <meta name="description" content="' + description + '" /><meta property="og:description" content="' + description + '" />' : ''}
    <link rel="canonical" href="${canonicalUrl}" />
    <meta property="og:url" content="${canonicalUrl}" />${headerImageMeta}${authorMeta}
  </head>
  <body>
    <header>
      <div id="header-content">
        <div id="site-logo"><a href="${basePath}/">Home</a></div>
        <label id="nav-menu-toggle" for="nav-collapse-button">
          <input type="checkbox" id="nav-collapse-button" />
          <span id="nav-menu-icon"></span>
        </label>
        <nav>
          <ul>
            <li><a href="${basePath}/about/">About</a></li>
            <li><a href="${basePath}/blog/">Blog</a></li>
            <li><a href="${basePath}/get-involved/">Get Involved</a></li>
            <li><a href="${basePath}/contact/">Contact Us</a></li>
            <li><a href="${basePath}/donate/" class="nav-donate">Donate &gt;</a></li>
          </ul>
        </nav>
      </div>
    </header>
    <div class="container">
      ${content}
    </div>
    <footer>
      <div id="footer-content">
        <nav>
          <h3 class="special-alt-text">Social media links</h3>
          <ul id="svg-link-list">
            <li><a class="svg-footer-link" id="svg-discord" href="https://discord.gg/uRSthurdPY">discord</a></li>
            <li><a class="svg-footer-link" id="svg-twitter" href="https://twitter.com/801labs">twitter</a></li>
            <li><a class="svg-footer-link" id="svg-meetup" href="https://www.meetup.com/801labs/">meetup</a></li>
            <li><a class="svg-footer-link" id="svg-youtube" href="https://www.youtube.com/c/801LabsSaltLakeCity">youtube</a></li>
            <li><a class="svg-footer-link" id="svg-github" href="https://github.com/801labs/">github</a></li>
          </ul>
        </nav>
        <div id="footer-nav-box">
          <nav>
            <a href="${basePath}/about/">ABOUT</a>
            <span>|</span>
            <a href="${basePath}/blog/">BLOG</a>
            <span>|</span>
            <a href="${basePath}/get-involved/">GET INVOLVED</a>
            <span>|</span>
            <a href="${basePath}/contact/">CONTACT US</a>
          </nav>
          <p>© 2024 801Labs.org. All rights reserved.</p>
          <p>801 Labs hackerspace is a 501(c)(3) that is open to the public!</p>
          <p>353 East 200 South Suite #201, Salt Lake City, UT 84111</p>
          <p class="bottom-links">
            <a href="${basePath}/code-of-conduct/">Code of Conduct</a>
            <span>|</span>
            <a href="${basePath}/terms/">Terms</a>
            <span>|</span>
            <a class="nav-donate" href="${basePath}/donate/">Donate</a>
          </p>
        </div>
      </div>
    </footer>
  </body>
</html>
`.trim() + '\n'
  };
};

export default basic;
