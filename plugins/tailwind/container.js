const plugin = require('tailwindcss/plugin');

module.exports = plugin(({addComponents}) => {
    const components = {
        ['.container']: {
            maxWidth: '120rem',
        },
        ['.container-880']: {
            maxWidth: '55rem',
        },
        ['.container-1200']: {
            maxWidth: '75rem',
        },
        ['.container-1400']: {
            maxWidth: '87.5rem',
        },
    };

    addComponents(components);
});