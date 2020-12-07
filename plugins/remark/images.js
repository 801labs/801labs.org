const visit = require('unist-util-visit')

export default () => (tree, file) => {
    visit(tree, 'image', (node, index, parent) => {
        const image = require(`images/${node.url}?resize`)
        const { width, height } = image.images[image.images.length - 1];

        const img = `<img src="${image.src}" srcset="${image.srcSet}" sizes="(min-width: 960px) 960px, 100vw" width="${width}" height="${height}" alt="${image.alt}" loading="lazy" />`

        const markup = {
            type: 'html',
            value: node.title ? `<figure>${img}<figcaption>${node.title}</figcaption></figure>` : img,
        };

        parent.children.splice(index, 1, markup);
        return [visit.SKIP, index];
    })
}

