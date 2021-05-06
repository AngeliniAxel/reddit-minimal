import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

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
      <SearchBar />
      <Posts />
    </div>
  );
}
export default App;
