const _ = require('lodash');
const plugin = require('tailwindcss/plugin');

module.exports = plugin(({addUtilities, e, theme, variants}) => {
    const fluidFontSizes = theme('fluidFontSize', {});
    const fluidFontSizeVariants = variants('fluidFontSize', []);

    const utilities = _.map(fluidFontSizes, ([min, max], name) => {
        const minRem = min / 16;
        const maxRem = max / 16;
        return {
            [`.fluid-text-${e(name)}`]: {
                fontSize: `clamp(${minRem}rem, calc(${min}px + ${max - min} * ((100vw - 320px) / ${1920 - 320})), ${maxRem}rem)`,
            },
        }
    });

    addUtilities(utilities, fluidFontSizeVariants)
}, {
    variants: {
        fluidFontSize: ['responsive'],
    }
});