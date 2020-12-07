import React, {Component} from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCircle, faPlay} from "@fortawesome/free-solid-svg-icons"
import Image from "./Image";

class YoutubeEmbed extends Component {
    state = {
        load: false,
    };

    load = () => {
        this.setState({load: true});
    }

    render() {
        return <div
            className="relative h-0 bg-black text-white"
            style={{
                paddingBottom: `${this.props.height / this.props.width * 100}%`,
                minHeight: '350px'
            }}>
            {this.state.load
                ? <iframe
                    className="absolute block inset-0 w-full h-full"
                    width={this.props.width}
                    height={this.props.height}
                    style={{
                        minHeight: '350px'
                    }}
                    src={`https://www.youtube.com/embed/${this.props.videoId}?autoplay=1`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen/>
                : <button
                    onClick={this.load}
                    className="group absolute block inset-0 w-full h-full flex items-center justify-center">
                    <Image
                        className="absolute inset-0 w-full h-full object-cover object-center opacity-50"
                        src={this.props.poster}
                        sizes="(min-width: 1200px) 1180px, 100vw"
                        width={this.props.width}
                        height={this.props.height}
                        alt={this.props.alt || 'Play Video'}
                    />
                    <span
                        className="fa-layers fa-fw fa-6x relative opacity-70 group-hover:opacity-100 group-focus:opacity-100">
                            <FontAwesomeIcon
                                className="text-navy-500"
                                icon={faCircle}/>
                            <FontAwesomeIcon
                                icon={faPlay}
                                transform="shrink-8 right-.75"/>
                        </span>
                </button>
            }
        </div>
    }
}

export default YoutubeEmbed