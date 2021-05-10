import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';
import { fetchPosts } from './features/redditSlice/redditSlice';
import { selectSearchTerm } from './features/searchTermSlice/searchTermSlice';

import SearchBar from './app/components/SearchBar/searchBar';
import Posts from './app/components/Posts/Posts';
import IndividualPost from './app/components/IndividualPost/IndividualPost';
import { fetchSubreddit } from './features/subredditSlice/subredditSlice';
import Subreddit from './app/components/Subreddit/Subreddit';

function App() {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);

  useEffect(() => {
    if (searchTerm.length > 1) {
      dispatch(fetchPosts(searchTerm));
    }
  }, [searchTerm]);

  useEffect(() => {
    dispatch(fetchSubreddit());
  }, []);

  return (
    <div className='App'>
      <Router>
        <SearchBar />

        <div className='wrapper'>
          <Switch>
            <Route path='/posts' exact component={Posts} />
            <Route path='/posts/:id' component={IndividualPost} />
          </Switch>
          <Subreddit />
        </div>
      </Router>
    </div>
  );
}
export default App;
