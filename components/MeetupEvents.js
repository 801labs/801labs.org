import React, {Component} from "react"
import {getEvents} from "../lib/events"
import MeetupEvent from "./MeetupEvent";

class MeetupEvents extends Component {
    static defaultProps = {
        limit: 4,
    };

    state = {
        events: null,
    };

    componentDidMount() {
        getEvents(this.props.limit)
            .then((events) => {
                this.setState({ events })
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        const events = this.state.events ?? new Array(this.props.limit).fill(null);

        return <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            {events.map((event, i) => {
                return <MeetupEvent key={i} event={event} />
            })}
        </div>
    }
}

export default MeetupEvents