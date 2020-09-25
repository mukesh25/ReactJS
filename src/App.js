import React, { Component } from "react";
// let e1 = React.createElement("h1", null, "Hello Mukesh");
// export default e1;

class App extends Component {
    render() {
        return React.createElement("h1", null, "Hello Mukesh");
        // return <h1 > Hello Mukesh < /h1>
    }
}

export default App;