import React from "react"
import Link from "next/link";

const Tags = (props) => {
    return <div>
        <h3 className="fluid-text-lg font-bold bg-black text-white px-5 py-1 mb-3">
            Tags
        </h3>
        <ul className="px-5 py-1 space-y-2">
            {Object.entries(props.tags).map(([handle, tag]) => (
                <li key={handle}>
                    <Link href={`${props.path}/[tag]/[page]`} as={`${props.path}/${handle}/1`}>
                        <a>{tag}</a>
                    </Link>
                </li>
            ))}
        </ul>
    </div>
}

export default Tags