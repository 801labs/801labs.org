import React, {Fragment} from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {
    faMapMarkerAlt,
    faSpinner,
    faVideo,
} from "@fortawesome/free-solid-svg-icons"
import DateFormatter from "./DateFormatter"
import PlaceholderText from "./PlaceholderText";

const MeetupEvent = (props) => {
    let content = <Fragment>
        <div className="fluid-text-sm font-bold text-gray-600 mb-1">
            {props.event
                ? <DateFormatter timestamp={props.event.time} offset={props.event.utc_offset} />
                : <PlaceholderText characters={7} />
            }
        </div>
        <h3 className="fluid-text-lg font-bold mb-1">
            {props.event
                ? props.event.name
                : <PlaceholderText characters={4} />
            }
        </h3>
        <p className="mb-1">
            {props.event
                ? props.event.group.name
                : <PlaceholderText characters={2} />
            }
        </p>
        <div className="fluid-text-sm text-gray-600 mb-4">
            <FontAwesomeIcon
                className="text-gray-500 mr-2"
                icon={props.event ? (props.event.is_online_event ? faVideo : faMapMarkerAlt) : faSpinner}
                spin={!props.event} />
            {props.event
                ? (props.event.is_online_event ? 'Online Event' : (props.event?.venue?.name || '801Labs Hackerspace'))
                : <PlaceholderText characters={4} />
            }
        </div>
        <div className="flex justify-between items-center fluid-text-sm">
            <div className="text-gray-600 truncate">
                {props.event
                        ? (<span dangerouslySetInnerHTML={{__html: props.event.description}}></span>)
                    : <PlaceholderText characters={50} />
                }
            </div>
        </div>
    </Fragment>
    
    return props.event ? <a
        target="_blank"
        rel="noopener"
        href={props.event.link}
        className="group block bg-white text-black rounded px-12 py-8 hover:shadow-2xl focus:shadow-2xl">
        {content}
    </a> : <div className="group block bg-white text-black rounded px-12 py-8 hover:shadow-2xl focus:shadow-2xl">
        {content}
    </div>
}

export default MeetupEvent
