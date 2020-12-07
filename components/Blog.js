import React from "react";
import Hero from "./Hero";
import PostPreview from "./PostPreview";
import Tags from "./Tags";
import Pagination from "./Pagination";

const Blog = (props) => (
    <>
        <Hero title={props.heroTitle} />
        <div className="bg-gray-200">
            <div className="container-1400 mx-auto px-5 py-20 lg:flex">
                <div className="lg:w-3/4">
                    <h2 className="h4 mb-10">{props.title}</h2>
                    <div className="grid md:grid-cols-2 xl:grid-cols-6 gap-6">
                        {props.posts.map((post, i) => (
                            <PostPreview
                                {...post}
                                containerClasses={i % 5 < 2 ? "xl:col-span-3" : "xl:col-span-2"}
                                key={post.slug}
                                path={props.path}
                            />
                        ))}
                    </div>
                    {props.pagination?.totalPages > 1 && <div className="mt-10">
                        <Pagination
                            path={props.paginationPath}
                            {...props.pagination}
                            />
                    </div>}
                </div>
                <aside className="lg:order-first lg:w-1/4 mt-20 lg:mt-0 lg:mr-10 xl:mr-20">
                    <Tags tags={props.allTags} path={`${props.path}/tag`} />
                </aside>
            </div>
        </div>
    </>
)

export default Blog;