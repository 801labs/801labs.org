const plugin = require('tailwindcss/plugin')

module.exports = plugin(({addVariant, e}) => {
    addVariant('group-focus-within', ({modifySelectors, separator}) => {
        modifySelectors(({className}) => {
            return `.group:focus-within .${e(`group-focus-within${separator}${className}`)}`
        })
    })
})