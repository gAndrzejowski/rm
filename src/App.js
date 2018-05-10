import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import Heading from './components/Heading/Heading';
import Footing from './components/Footing/Footing';
import Results from './components/Results/Results';
import ResultUtils from './components/ResultUtils/ResultUtils';
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import mockMovies from './__mocks__/mockMovies';
import styles from './App.scss';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            results: mockMovies,
            selectedMovie: null,
            currentSort: 'release_date'
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
    changeSorting = (crit) => {
        this.setState({currentSort: crit});
    };
    getSortingFunc = () => {
        return (a,b)=>{
            return a[this.state.currentSort]<b[this.state.currentSort] ? 1 : -1;
        }
    };

    render() {
        const {selectedMovie, results, currentSort} = this.state;
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
                    <ResultUtils numFound={results.length} changeSorting={this.changeSorting} currentSort={currentSort} />
                    <Results results={results.sort(this.getSortingFunc())} chooseMovie={this.chooseMovie} />
                </ErrorBoundary>
                <ErrorBoundary>
                    <Footing />
                </ErrorBoundary>
            </Fragment>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('main'));