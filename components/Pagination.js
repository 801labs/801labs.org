import React from "react"
import Link from "next/link"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";

const Pagination = (props) => {
    const links = [];
    for (let i = 1; i <= props.totalPages; i++) {
        links.push(<li key={`page-${i}`}>
            {i === props.currentPage ?
                <span className="inline-block bg-gray-500 py-1 px-3">{i}</span> :
                <Link href={`${props.path}/[page]`} as={`${props.path}/${i}`}>
                    <a className="inline-block py-1 px-3 hover:bg-gray-400">{i}</a>
                </Link>
            }
        </li>)
    }

    return (<ul className="flex justify-center space-x-2 font-bold">
        {props.currentPage > 1 && <li>
            <Link href={`${props.path}/[page]`} as={`${props.path}/${props.currentPage - 1}`}>
                <a className="inline-block py-1 px-3 hover:bg-gray-400" title="previous page">
                    <FontAwesomeIcon icon={faChevronLeft}/>
                </a>
            </Link>
        </li>}
        {props.totalPages > 1 && links}
        {props.currentPage < props.totalPages && <li>
            <Link href={`${props.path}/[page]`} as={`${props.path}/${props.currentPage + 1}`}>
                <a className="inline-block py-1 px-3 hover:bg-gray-400" title="next page">
                    <FontAwesomeIcon icon={faChevronRight}/>
                </a>
            </Link>
        </li>}
    </ul>)
}

export default Pagination