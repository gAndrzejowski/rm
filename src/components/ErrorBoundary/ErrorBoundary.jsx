import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  static propTypes = {
    children: PropTypes.any,
  }

  constructor(props) {
    super(props);
    this.state = {
      error: null,
    };
  }

  componentDidCatch(error, info) {
    this.setState({
      error: {
        error,
        info,
      },
    });
  }
  render() {
    return this.state.error ? (<h1>Something went horribly wrong!</h1>) : this.props.children;
  }
}
export default ErrorBoundary;
