import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './App.css';
import { fetchPosts, selectPosts } from './features/reddit/redditSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts('meme'));
  }, []);

  const posts = useSelector(selectPosts);

  return (
    <div className='App'>
      {console.log(posts)}
      <h2>{posts[0].title}</h2>
    </div>
  );
}
export default App;
