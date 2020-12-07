import React from "react"

const PlaceholderText = (props) => {
    return <span className="bg-current">{'&ic;'.repeat(props.characters)}</span>
}

export default PlaceholderText