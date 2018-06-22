import React from 'react';
import { storiesOf } from '@storybook/react';
import injectStylesheet from 'react-jss';
import { action } from '@storybook/addon-actions';
import { StaticRouter as Router } from 'react-router-dom';
import { SearchBox } from '../src/components/SearchBox/SearchBox';
import styles from '../src/components/SearchBox/SearchBox.styles';

const Search = injectStylesheet(styles)(SearchBox);

storiesOf('Search Box', module)
  .add('empty', () => (
    <Router context={{}}>
      <div>
        <Search
          searchBy="title"
          onQueryChange={action('query changed')}
          onCriterionChosen={action('change search criteria')}
          search={action('search')}
        />
      </div>
    </Router>
  ))
  .add('filled out', () => (
    <Router context={{}}>
      <div>
        <Search
          searchBy="genre"
          query="Action"
          onQueryChange={action('query changed')}
          onCriterionChosen={action('change search criteria')}
          search={action('search')}
        />
      </div>
    </Router>
  ));
