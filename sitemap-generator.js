const sitemap = require('nextjs-sitemap-generator');

sitemap({
    baseUrl: 'https://www.801labs.org',
    pagesDirectory: __dirname + "/out",
    targetDirectory : 'out/',
    nextConfigPath: __dirname + "/next.config.js",
    ignoreIndexFiles: true,
    ignoredPaths: [
        '_next/',
        'images/',
        '.htaccess'
    ],
    ignoredExtensions: [
        'jpg',
        'png',
        'xml'
    ],
});

console.log(`✅ sitemap.xml generated!`);