import React from "react"
import Link from "next/link"
import DateFormatter from "./DateFormatter"
import Image from "./Image"

const PostPreview = (props) => (
    <Link href={`${props.path}/post/[slug]`} as={`${props.path}/post/${props.slug}`} key={props.slug}>
        <a className={`flex flex-col bg-white text-black shadow ${props.containerClasses}`}>
            <div className="relative aspect-ratio-16:9">
                <Image
                    src={props.cover}
                    sizes='(min-width: 1920px) 460px, (min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw'
                    alt={props.title}
                    className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="p-6 flex-1 flex flex-col">
                <p className="text-teal-700 font-bold fluid-text-xs uppercase">
                    {props.tags.length ? props.tags[0] : <span>&nbsp;</span>}
                </p>
                <h2 className="fluid-text-lg mb-1 font-bold">
                    {props.title}
                </h2>
                {props.date_published && <p className="text-gray-700 fluid-text-xs mb-5">
                    <DateFormatter
                        timestamp={props.date_published}
                        format={{
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        }} />
                </p>}
                <div className="mt-auto flex items-center fluid-text-xs text-gray-700">
                    {props.author?.avatar && props.author?.name && <Image
                        src={props.author?.avatar}
                        sizes="32px"
                        alt={props.author?.name}
                        className="h-8 w-8 object-cover rounded-full mr-3"
                    />}
                    {props.author?.name}
                </div>
            </div>
        </a>
    </Link>
)

export default PostPreview