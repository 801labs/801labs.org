import React from "react";
import "../styles/styles.css";

const App = ({Component, pageProps}) => {
    return <Component {...pageProps}/>
}

export default App;