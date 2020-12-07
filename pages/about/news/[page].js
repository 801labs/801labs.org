import React from "react";
import Layout from "../../../layouts/Layout";
import Blog from "../../../components/Blog";
import Meta from "../../../components/Meta";
import {news} from "../../../lib/blogs";

const Page = (props) => (
    <Layout>
        <Meta
            title="News"
            description="Read our research articles, stories, biohacking, reverse engineering, how-to videos, and more!"
        />
        <Blog
            allTags={props.allTags}
            heroTitle="801 Labs News"
            pagination={props.pagination}
            paginationPath="/about/news"
            path="/about/news"
            posts={props.posts}
            title="News"
        />
    </Layout>
)

export async function getStaticProps({params}) {
    if (!params) return;

    const allTags = news.getTags()
    const data = news.getPosts(+params.page, news.postsPerPage)

    return {
        props: {
            allTags,
            ...data,
        }
    }
}

export async function getStaticPaths() {
    const {pagination} = news.getPosts(1, news.postsPerPage)

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