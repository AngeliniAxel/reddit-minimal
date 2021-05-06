import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './App.css';
import { fetchPosts, selectPosts } from './features/reddit/redditSlice';
import { selectSearchTerm } from './features/searchTerm/searchTermSlice';

import SearchBar from './app/components/searchBar/searchBar';

function App() {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);

  useEffect(() => {
    dispatch(fetchPosts(searchTerm));
  }, [searchTerm]);

  const posts = useSelector(selectPosts);

  return (
    <div className='App'>
      <SearchBar />
      <h2>{searchTerm}</h2>
    </div>
  );
}
export default App;
