const _ = require('lodash');
const plugin = require('tailwindcss/plugin');

module.exports = plugin(({addUtilities, e, theme, variants}) => {
    const textShadows = theme('textShadow', {});
    const textShadowVariants = variants('textShadow', []);

    const utilities = _.map(textShadows, (textShadow, name) => ({
        [`.text-shadow-${e(name)}`]: {
            textShadow,
        }
    }));

    addUtilities(utilities, textShadowVariants);
});