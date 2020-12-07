module.exports = {
    plugins: {
        'postcss-import': {},
        tailwindcss: {},
        'postcss-clamp': {},
        'postcss-flexbugs-fixes': {},
        'postcss-preset-env': {
            autoprefixer: {
                flexbox: 'no-2009',
            },
            stage: 3,
            features: {
                'custom-properties': false,
            },
        },
        autoprefixer: {},
        ...(process.env.NODE_ENV === 'production'
                ?
                {
                    '@fullhuman/postcss-purgecss': {
                        content: [
                            './content/**/*.md',
                            './components/**/*.js',
                            './components/**/*.jsx',
                            './components/**/*.tsx',
                            './layouts/**/*.js',
                            './layouts/**/*.jsx',
                            './layouts/**/*.tsx',
                            './pages/**/*.js',
                            './pages/**/*.jsx',
                            './pages/**/*.md',
                            './pages/**/*.mdx',
                            './pages/**/*.tsx',
                        ],
                        defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
                    }
                } : {}
        ),
    },
}