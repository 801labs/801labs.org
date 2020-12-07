import React from "react";
import Layout from "../../layouts/Layout";
import Blog from "../../components/Blog";
import Meta from "../../components/Meta";
import {research} from "../../lib/blogs";

const Page = (props) => (
    <Layout>
        <Meta
            title="Research Portal"
            description="Read our research articles, stories, biohacking, reverse engineering, how-to videos, and more!"
        />
        <Blog
            allTags={props.allTags}
            heroTitle="801 Labs Research Portal"
            pagination={props.pagination}
            paginationPath="/research-portal"
            path="/research-portal"
            posts={props.posts}
            title="Research, How-To's, Stories, & More"
        />
    </Layout>
)

export async function getStaticProps({params}) {
    if (!params) return;

    const allTags = research.getTags()
    const data = research.getPosts(+params.page, research.postsPerPage)

    return {
        props: {
            allTags,
            ...data,
        }
    }
}

export async function getStaticPaths() {
    const {pagination} = research.getPosts(1, research.postsPerPage)

    const paths = [];
    for (let i = 1; i <= pagination.totalPages; i++) {
        paths.push({
            params: {
                page: `${i}`,
            }
        })
    }

    return {
        paths,
        fallback: false,
    }
}

export default Page