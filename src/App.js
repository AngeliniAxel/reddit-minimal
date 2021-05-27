import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {
  fetchPosts,
  fetchPostsFromSubreddit,
} from './features/postsSlice/postsSlice';
import { selectSearchTerm } from './features/searchTermSlice/searchTermSlice';
import { fetchSubreddit } from './features/subredditsSlice/subredditsSlice';

import SearchBar from './app/components/searchBar/searchBar';
import Posts from './app/components/Post/Posts';
import IndividualPost from './app/components/IndividualPost/IndividualPost';

import Subreddits from './app/components/Subreddits/Subreddits';

import './App.scss';

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
    dispatch(fetchPostsFromSubreddit('/r/all/'));
  }, []);

  return (
    <div className='App'>
      <Router>
        <SearchBar />

        <div className='wrapper'>
          <div className='switch'>
            <Switch>
              <Route path='/' exact component={Posts} />
              <Route path='/posts' exact component={Posts} />
              <Route path='/posts/:id' exact component={IndividualPost} />
              <Route path='/subreddit' exact component={Subreddits} />
            </Switch>
          </div>

          <div className='subreddit-component'>
            <Subreddits />
          </div>
        </div>
      </Router>
    </div>
  );
}
export default App;
