import React from "react";
import Layout from "../../../../../layouts/Layout";
import Blog from "../../../../../components/Blog";
import Meta from "../../../../../components/Meta";
import {useRouter} from "next/router";
import {news} from "../../../../../lib/blogs";

const Page = (props) => {
    const router = useRouter()

    return (
        <Layout>
            <Meta
                title={`News: ${props.allTags[router.query.tag]}`}
                description=""
            />
            <Blog
                allTags={props.allTags}
                heroTitle="801 Labs News"
                pagination={props.pagination}
                paginationPath={`about/news/tag/${router.query.tag}`}
                path="/about/news"
                posts={props.posts}
                title={props.allTags[router.query.tag]}
            />
        </Layout>
    )
}

export async function getStaticProps({params}) {
    if (!params) return;

    const allTags = news.getTags()
    const data = news.getPostsByTag(params.tag, +params.page, news.postsPerPage)

    return {
        props: {
            allTags,
            ...data,
        }
    }
}

export async function getStaticPaths() {
    const tags = news.getTags()

    const paths = [];
    Object.keys(tags).forEach((tag) => {
        const {pagination} = news.getPostsByTag(tag, 1, news.postsPerPage)

        for (let i = 1; i <= pagination.totalPages; i++) {
            paths.push({
                params: {
                    page: `${i}`,
                    tag,
                }
            })
        }
    })

    return {
        paths,
        fallback: false,
    }
}

export default Page