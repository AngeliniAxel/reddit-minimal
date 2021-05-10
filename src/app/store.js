import { configureStore } from '@reduxjs/toolkit';
import redditSlice from '../features/redditSlice/redditSlice';
import searchTermSlice from '../features/searchTermSlice/searchTermSlice';
import postSlice from '../features/postSlice/postSlice';
import subredditSlice from '../features/subredditSlice/subredditSlice';

export const store = configureStore({
  reducer: {
    reddit: redditSlice,
    searchTerm: searchTermSlice,
    selectedPost: postSlice,
    subreddit: subredditSlice,
  },
});
