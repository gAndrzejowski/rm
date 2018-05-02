import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error:null
        }
    }

    componentDidCatch(error, info) {
        this.setState({error: {
                error,
                info
            }});
        console.log(error, info);
    }
    render() {
        return this.state.error ? (<h1>Something went horribly wrong - more info in the console</h1>) : this.props.children;
    }
}
export default ErrorBoundary;