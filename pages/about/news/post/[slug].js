import React from "react";
import Layout from "../../../../layouts/Layout";
import Hero from "../../../../components/Hero";
import Image from "../../../../components/Image";
import Meta from "../../../../components/Meta";
import Tags from "../../../../components/Tags";
import {markdownToHtml} from "../../../../lib/utilities";
import {news} from "../../../../lib/blogs";

const Post = (props) => (
    <Layout>
        <Meta
            title={props.title}
            description={props.description}
            image={props.cover}
        />
        <Hero title="801 Labs News" hLevel={2} />
        <div className="container-1400 mx-auto px-5 py-20 md:flex md:space-x-20">
            <aside className="hidden md:block md:w-1/4">
                <Tags tags={props.allTags} path="/about/news/tag" />
            </aside>
            <div className="md:w-3/4">
                <h1 className="h2 mb-10">{props.title}</h1>
                {props.cover && !props.content?.includes(props.cover) && <Image
                    src={props.cover}
                    sizes="(min-width: 960px) 960px, 100vw"
                    alt={props.title}
                    className="mb-8 mx-auto max-h-100"
                />}
                <div className="space-y-6 markdown" dangerouslySetInnerHTML={{ __html: props.content }}>

                </div>
            </div>
        </div>
    </Layout>
)

export async function getStaticProps({params}) {
    if (!params) return;

    const allTags = news.getTags()

    const post = news.getPostBySlug(params.slug)
    const content = await markdownToHtml(post.content)

    return {
        props: {
            allTags,
            ...post,
            content,
        },
    }
}

export async function getStaticPaths() {
    const {posts} = news.getPosts()

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    slug: post.slug,
                }
            }
        }),
        fallback: false,
    }
}

export default Post