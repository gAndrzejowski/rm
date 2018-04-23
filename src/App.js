import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from "./components/Greeting/Greeting";

class App extends React.Component {

    render() {
        return <Greeting />
    }
}

ReactDOM.render(<App />, document.getElementById('main'));