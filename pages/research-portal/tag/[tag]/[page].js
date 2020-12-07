import React from "react";
import Layout from "../../../../layouts/Layout";
import Blog from "../../../../components/Blog";
import Meta from "../../../../components/Meta";
import {useRouter} from "next/router";
import {research} from "../../../../lib/blogs";

const Page = (props) => {
    const router = useRouter()

    return (
        <Layout>
            <Meta
                title={`Research Portal: ${props.allTags[router.query.tag]}`}
                description="Read our research articles, stories, biohacking, reverse engineering, how-to videos, and more!"
            />
            <Blog
                allTags={props.allTags}
                heroTitle="801 Labs Research Portal"
                pagination={props.pagination}
                paginationPath={`/research-portal/tag/${router.query.tag}`}
                path="/research-portal"
                posts={props.posts}
                title={props.allTags[router.query.tag]}
            />
        </Layout>
    )
}

export async function getStaticProps({params}) {
    if (!params) return;

    const allTags = research.getTags()
    const data = research.getPostsByTag(params.tag, +params.page, research.postsPerPage)

    return {
        props: {
            allTags,
            ...data,
        }
    }
}

export async function getStaticPaths() {
    const tags = research.getTags()

    const paths = [];
    Object.keys(tags).forEach((tag) => {
        const {pagination} = research.getPostsByTag(tag, 1, research.postsPerPage)

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