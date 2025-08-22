import React from "react"

const CalendarFrame = () => (
  <div className="CalendarFrame -mx-5">
    <iframe
      src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FDenver&showPrint=0&src=Y190a2Q1NjhrcGZtZmRudXM5ZnJ2c3Y1ZmZzMEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%2333b679"
      style={{
        border: "solid 1px #777",
        maxWidth: "800px",
        width: "100%",
        margin: "0 auto",
      }}
      height="600"
      frameBorder="0"
      scrolling="no"
    ></iframe>
  </div>
)

export default CalendarFrame