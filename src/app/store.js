import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import redditSlice from '../features/reddit/redditSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    reddit: redditSlice,
  },
});
