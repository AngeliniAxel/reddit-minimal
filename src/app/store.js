import { configureStore } from '@reduxjs/toolkit';
import redditSlice from '../features/reddit/redditSlice';
import searchTermSlice from '../features/searchTerm/searchTermSlice';

export const store = configureStore({
  reducer: {
    reddit: redditSlice,
    searchTerm: searchTermSlice,
  },
});
