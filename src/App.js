import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import Heading from './components/Heading/Heading';
import Footing from './components/Footing/Footing';
import Results from './components/Results/Results';
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import mockMovies from './mockMovies';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            results: mockMovies,
            selectedMovie: null
        }
    }

    searchMovieDB = (query, by) => {
        console.log(`searching by params - query: ${query}, criterion: ${by}`);
    };
    chooseMovie = (selectedMovie) => {
        this.setState({selectedMovie});
    };
    resetMovie = () => {
        this.setState({selectedMovie:null});
    };

    render() {
        const {selectedMovie, results} = this.state;
        return (
            <Fragment>
                <ErrorBoundary>
                    <Heading
                        selectedMovie={results[selectedMovie] || null}
                        search={this.searchMovieDB}
                        backToSearch={this.resetMovie}
                    />
                </ErrorBoundary>
                <ErrorBoundary>
                    <Results results={results} chooseMovie={this.chooseMovie} />
                </ErrorBoundary>
                <ErrorBoundary>
                    <Footing />
                </ErrorBoundary>
            </Fragment>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('main'));