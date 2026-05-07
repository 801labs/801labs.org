import type { Config, TemplateFunction, TemplateMap, TemplateOutput } from '../shared.ts';

const basic: TemplateFunction = (config: Config, _templateMap: TemplateMap) => {
  const {
    title,
    content,
    basePath,
    description,
    derivedPages,
  } = config;
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
${ config['meta-noindex'] ? '    <meta name="robots" content="noindex"/>' : ''}
${ description ? '    <meta name="description" content="' + description + '" />' : ''}
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
