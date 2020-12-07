const _ = require('lodash');
const plugin = require('tailwindcss/plugin');

module.exports = plugin(({addUtilities, e, theme, variants}) => {
    const backgroundImages = theme('backgroundImage', {});
    const backgroundImageVariants = variants('backgroundImage', []);

    const utilities = _.map(backgroundImages, (backgroundImage, name) => ({
        [`.bg-image-${e(name)}`]: {
            backgroundImage: `url(${backgroundImage})`,
        },
    }));

    addUtilities(utilities, backgroundImageVariants)
});