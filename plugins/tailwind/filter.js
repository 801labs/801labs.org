const _ = require('lodash');
const plugin = require('tailwindcss/plugin');

module.exports = plugin(({addUtilities, e, theme, variants}) => {
    const filters = theme('filter', {});
    const filterVariants = variants('filter', []);

    const utilities = _.map(filters, (filter, name) => ({
        [`.filter-${e(name)}`]: {
            filter,
        },
    }));

    addUtilities(utilities, filterVariants)
}, {
    variants: {
        filter: ['hover', 'focus'],
    }
})