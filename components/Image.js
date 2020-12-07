import React from "react"

const Image = (props) => {
    const image = require(`images/${props.src}?resize`)
    const { width, height } = image.images[image.images.length - 1];

    const imgProps = Object.assign(
        {
            loading: 'lazy',
        },
        props,
        {
            src: image.src,
            srcSet: image.srcSet,
            width,
            height,
            style: {
                maxWidth: `min(100%, ${width}px)`
            }
        }
    );

    if (!('sizes' in imgProps)) {
        imgProps.sizes = '100vw';
    }

    return (<img {...imgProps}/>)
}

export default Image