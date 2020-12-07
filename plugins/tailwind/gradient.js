const _ = require('lodash');
const plugin = require('tailwindcss/plugin');

module.exports = plugin(({addUtilities, e, theme}) => {
    const gradients = theme('gradient', {});

    const utilities = _.map(gradients, (gradient, name) => ({
        [`.gradient-${e(name)}`]: {
            backgroundImage: gradient,
        },
    }));

    addUtilities(utilities)
});