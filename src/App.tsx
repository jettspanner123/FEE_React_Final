import React from "react";

function App(): React.JSX.Element {


    return (
        <React.Fragment>
            hello world
            <button onClick={() => window.location.assign("/dashboard")}> click me</button>
        </React.Fragment>
    )
}

export default App;