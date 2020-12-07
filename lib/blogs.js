import fs from 'fs'
import {join} from 'path'
import matter from 'gray-matter'


class Blog {
    constructor(dir, postsPerPage) {
        this.dir = join(process.cwd(), dir)
        this.postsPerPage = postsPerPage
    }

    getSlugs() {
        return fs.readdirSync(this.dir)
    }

    getPostBySlug(slug) {
        const realSlug = slug.replace(/\.md$/, '')
        const fullPath = join(this.dir, `${realSlug}.md`)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const {data, content} = matter(fileContents)

        const post = Object.assign({}, data, {
            slug: realSlug,
            content,
        })

        post.excerpt = ('excerpt' in data) && data.excerpt ? data.excerpt : content.replace(/^(.{50}[^\s]*).*/, "$1")
        post.tags = ('tags' in data) && data.tags ? data.tags.split(/,\s?/g) : []
        post.date_published = ('date_published' in data) && ('getTime' in data.date_published) ? data.date_published.getTime() : data.date_published
        post.date_updated = ('date_updated' in data) && ('getTime' in data.date_updated) ? data.date_updated.getTime() : data.date_updated

        return post
    }

    getPosts(page = 1, perPage = -1) {
        const slugs = this.getSlugs()
        const posts = slugs.map((slug) => this.getPostBySlug(slug)).sort((post1, post2) => (post1.date_published > post2.date_published ? -1 : 1))

        return this.paginatePosts(posts, page, perPage)
    }

    getPostsByTag(tag, page = 1, perPage = -1) {
        const {posts} = this.getPosts()
        const tags = this.getTags()

        const taggedPosts = posts.reduce((acc, post) => {
            if (post.tags.includes(tags[tag])) {
                acc.push(post)
            }
            return acc
        }, [])

        return this.paginatePosts(taggedPosts, page, perPage)
    }

    getTags() {
        const {posts} = this.getPosts()
        return Object.fromEntries(posts.reduce((acc,post) => {
            if (!('tags' in post)) return acc
            post.tags.forEach(tag => {
                if (!acc.includes(tag)) acc.push(tag)
            })
            return acc
        }, []).sort((tag1, tag2) => {
            const tag1U = tag1.toUpperCase()
            const tag2U = tag2.toUpperCase()
            return tag1U < tag2U ? -1 : (tag2U < tag1U ? 1 : 0)
        }).map((tag => {
            const handle = tag.toLowerCase().replace(/\W/ig, '-')
            return [handle, tag]
        })))
    }

    paginatePosts(posts, page, perPage) {
        return {
            posts: perPage < 0 ? posts : posts.slice((page - 1) * perPage, page * perPage),
            pagination: {
                totalPages: Math.ceil(posts.length / perPage),
                totalItems: posts.length,
                currentPage: page,
            }
        }
    }
}

export const research = new Blog('content/research', 10);
export const news = new Blog('content/news', 10);
