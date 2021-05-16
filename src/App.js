import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';
import { fetchPosts } from './features/redditSlice/redditSlice';
import { selectSearchTerm } from './features/searchTermSlice/searchTermSlice';

import SearchBar from './app/components/SearchBar/searchBar';
import Posts from './app/components/Post/Posts';
import IndividualPost from './app/components/IndividualPost/IndividualPost';
import { fetchSubreddit } from './features/subredditSlice/subredditSlice';
import Subreddit from './app/components/Subreddit/Subreddit';
import { fetchPostsFromSubreddit } from './features/redditSlice/redditSlice';

function App() {
  const dispatch = useDispatch();
  const history = useHistory();
  const searchTerm = useSelector(selectSearchTerm);

  useEffect(() => {
    if (searchTerm.length > 1) {
      dispatch(fetchPosts(searchTerm));
    }
  }, [searchTerm]);

  useEffect(() => {
    dispatch(fetchSubreddit());
    dispatch(fetchPostsFromSubreddit('/r/home/'));
  }, []);

  return (
    <div className='App'>
      <Router>
        <SearchBar />

        <div className='wrapper'>
          <div className='switch'>
            <Switch>
              <Route path='/posts' exact component={Posts} />
              <Route path='/posts/:id' exact component={IndividualPost} />
              <Route path='/subreddit' exact component={Subreddit} />
            </Switch>
          </div>

          <div className='subreddit-component'>
            <Subreddit />
          </div>
        </div>
      </Router>
    </div>
  );
}
export default App;
