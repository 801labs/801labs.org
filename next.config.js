const path = require('path')
const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
})
const withOptimizedImages = require('next-optimized-images')

module.exports = withMDX(withOptimizedImages({
    webpack(config) {
        config.resolve.alias.images = path.join(__dirname, "images")
        return config;
    },
    responsive: {
        adapter: require('responsive-loader/sharp'),
        sizes: [320, 640, 960, 1280, 1900]
    },
    exportTrailingSlash: true,
    pageExtensions: ['mdx', 'jsx', 'js'],
    poweredByHeader: false,
    trailingSlash: true,
}))