const _ = require('lodash');
const plugin = require('tailwindcss/plugin');

module.exports = plugin(({addUtilities, e, theme, variants}) => {
    const aspectRatios = theme('aspectRatio', {});
    const aspectRatioVariants = variants('aspectRatio', []);

    const utilities = _.map(aspectRatios, (aspectRatio, name) => ({
        [`.aspect-ratio-${e(name)}`]: {
            height: 0,
            paddingBottom: aspectRatio,
        }
    }));

    addUtilities(utilities, aspectRatioVariants);
}, {
    variants: {
        aspectRatio: ['responsive'],
    }
});