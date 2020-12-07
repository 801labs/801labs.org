import React from "react"
import Heading from "./Heading"

const Hero = (props) => (
    <div className="bg-graphite-900 bg-image-grid bg-top text-white">
        <div className="container-1400 mx-auto px-5 py-20 text-center">
            <Heading level={props.hLevel || 1} className="h1 text-shadow-glow">
                {props.title}
            </Heading>
        </div>
    </div>
)

Hero.defaultProps = {
    hLevel: 1
}

export default Hero