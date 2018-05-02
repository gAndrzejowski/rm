import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBox.scss';

export default class SearchBox extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            query:'',
            searchBy:'title'
        }
    }
    static propTypes = {
        search:PropTypes.func.isRequired
    };
    onCriterionChosen = (searchBy) => {
        this.setState({searchBy})
    };
    onQueryChange = (event) => {
        this.setState({query: event.target.value});
    };
    render() {
        return (
           <Fragment>
               <h2>Find your movie</h2>
               <input
                   type="text"
                   placeholder={this.state.searchBy === 'title' ? 'Kill Bill' : 'Action'}
                   onChange={this.onQueryChange}
                   value={this.state.query} />
               <div className={styles.controls}>
                   <div>
                       <div>
                           Search by
                           <button
                               onClick={() => this.onCriterionChosen('title')}
                               className={this.state.searchBy === 'title' ? styles.btnActive : styles.btnInactive}
                           >title</button>
                           <button
                               onClick={() => this.onCriterionChosen('genre')}
                               className={this.state.searchBy === 'genre' ? styles.btnActive : styles.btnInactive}
                           >genre</button>
                       </div>
                       <button className={styles.search} onClick={()=>this.props.search(this.state.query, this.state.searchBy)}>Search</button>
                   </div>
               </div>
           </Fragment>
        )
    }
}