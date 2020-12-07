import {createElement} from "react"

const Heading = ({level, children, ...props}) => {
    return createElement(`h${level}`, props, children)
}

export default Heading