module.exports = {
  purge: false,

  corePlugins: {
    container: false,
    fontSize: false,
  },

  theme: {
    extend: {
      colors: {
        graphite: {
          700: '#1b242c',
          800: '#191a16',
          900: '#080b16',
        },
        lavender: {
          400: '#bc6bf0',
          700: '#4b154b',
          900: '#211e2e',
        },
        lime: {
          500: '#63b82f',
          900: '#171916',
        },
        mint: '#6bf0c2',
        cyan: '#06e7df',
        navy: {
          200: '#149dcb',
          300: '#4267b2',
          400: '#2a5ed6',
          500: '#12357c',
          700: '#15204b',
          800: '#141c3a',
          900: '#11152b',
        },
        sapphire: '#1F0A55',
        denim: {
          600: '#173247',
        },
        rust: '#9a2929',
        tangerine: '#ffad43',
      },
      maxHeight: {
        100: '25rem',
      },
      opacity: {
        '10': '.1',
        '20': '.2',
        '30': '.3',
        '40': '.4',
        '60': '.6',
        '70': '.7',
        '80': '.8',
        '90': '.9'
      },
      transitionProperty: {
        'background': 'background'
      }
    },

    fontFamily: {
      'sans': ['Roboto', 'system-ui', 'sans-serif'],
      'display': ['Tomorrow', 'system-ui', 'sans-serif'],
    },

    fluidFontSize: {
      xs: [12, 14],
      sm: [14, 16],
      base: [16, 18],
      lg: [18, 20],
      xl: [20, 24],
      '2xl': [24, 28],
      '3xl': [28, 32],
      '4xl': [32, 36],
      '5xl': [36, 40],
      '6xl': [40, 44],
      '7xl': [44, 52],
    },

    // Custom
    aspectRatio: {
      '4:3': '75%',
      '16:9': '56.25%',
    },

    backgroundImage: {
      grid: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDM2MCwgMjAyMC8wMi8xMy0wMTowNzoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjEgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjI5QTIyNEVCQjAxNzExRUE4NTNEQUJBNDFFNTUxMjVDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjI5QTIyNEVDQjAxNzExRUE4NTNEQUJBNDFFNTUxMjVDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjlBMjI0RTlCMDE3MTFFQTg1M0RBQkE0MUU1NTEyNUMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MjlBMjI0RUFCMDE3MTFFQTg1M0RBQkE0MUU1NTEyNUMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz60K/pwAAAAd0lEQVR42uzVIQ6AMAxA0Y7b9P6HaVBcZAKFZgiSLnk1mBrysv5xzTMjouJ9Wu8dsT7Vee/Lj2TnPSJEiBDZUyQXvtV5byi7N+JqESFChIiyK7s3QoQIESLKruzK7moRIUKEiLIru7K7WkSIECHy/94TxO3nFmAA4zKXNDuwvJsAAAAASUVORK5CYII=',
      hackerspace: '/images/801-labs-is-a-hackerspace-not-a-maker-space.jpg',
    },

    filter: {
      'shadow-xl': 'drop-shadow(0px 20px 20px rgba(0,0,0,0.65))',
    },

    gradient: {
      'left-bottom-sapphire-black': "linear-gradient(195deg, theme('colors.sapphire') 55%, theme('colors.black') 70%)",
    },

    textShadow: {
      'glow': "theme('colors.lime.500') 0 0 5px, theme('colors.lime.500') 0 0 6px, theme('colors.lime.500') 0 0 7px",
    },
  },

  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover', 'group-focus'],
    borderColor: ['responsive', 'hover', 'focus', 'group-hover', 'group-focus'],
    display: ['responsive', 'hover', 'focus', 'focus-within', 'group-hover', 'group-focus-within'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover', 'group-focus'],
    opacity: ['responsive', 'hover', 'focus', 'group-hover', 'group-focus'],
  },

  plugins: [
      require('./plugins/tailwind/group-focus-within'),
      require('./plugins/tailwind/aspect-ratio'),
      require('./plugins/tailwind/background-image'),
      require('./plugins/tailwind/filter'),
      require('./plugins/tailwind/fluid-font-size'),
      require('./plugins/tailwind/gradient'),
      require('./plugins/tailwind/text-shadow'),
      require('./plugins/tailwind/container'),
  ],
}
