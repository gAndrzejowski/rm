import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

    render() {
        return <p className="message">Hello from React</p>
    }
}

ReactDOM.render(<App />, document.getElementById('main'));