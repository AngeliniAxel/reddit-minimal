import { configureStore } from '@reduxjs/toolkit';
import postsSlice from '../features/postsSlice/postsSlice';
import searchTermSlice from '../features/searchTermSlice/searchTermSlice';
import postSlice from '../features/postSlice/postSlice';
import subredditsSlice from '../features/subredditsSlice/subredditsSlice';

export const store = configureStore({
  reducer: {
    posts: postsSlice,
    searchTerm: searchTermSlice,
    selectedPost: postSlice,
    subreddits: subredditsSlice,
  },
});
