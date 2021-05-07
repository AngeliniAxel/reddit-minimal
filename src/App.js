import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';
import { fetchPosts } from './features/reddit/redditSlice';
import { selectSearchTerm } from './features/searchTerm/searchTermSlice';

import SearchBar from './app/components/SearchBar/searchBar';
import Posts from './app/components/Posts/Posts';

function App() {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);

  useEffect(() => {
    dispatch(fetchPosts(searchTerm));
  }, [searchTerm]);

  return (
    <div className='App'>
      <Router>
        <SearchBar />
        <Switch>
          <Route path='/posts' component={Posts} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
