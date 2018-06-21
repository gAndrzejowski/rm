// @flow
import React from 'react';

type Props = {
  children :any,
};
type State = {
  error: null|{error: Object, info: string},
};

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      error: null,
    };
  }

  componentDidCatch(error :Error, info: string) {
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
