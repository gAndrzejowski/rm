import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import Greeting from "./components/Greeting/Greeting";
import styles from './App.scss';

class App extends React.Component {

    render() {
        return (
            <Fragment>
                <Greeting name="mister" />
                <p className={styles.subscript}>Good to see you again</p>
            </Fragment>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('main'));