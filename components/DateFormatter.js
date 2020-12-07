import React from "react"

const DateFormatter = (props) => {
    let date = new Date(props.timestamp);
    return <time dateTime={date.toISOString()}>{date.toLocaleDateString(props.locale, props.format)}</time>
}

DateFormatter.defaultProps = {
    format: {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        timeZoneName: 'short',
    },
    locale: 'en-us',
    offset: -21600000, // MDT Timezone
}

export default DateFormatter