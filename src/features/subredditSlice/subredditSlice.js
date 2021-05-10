import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSubreddit = createAsyncThunk(
  'subreddit/fetchSubreddit',
  async (term) => {
    const subreddits = await fetch(`https://www.reddit.com/subreddits/.json`)
      .then((res) => res.json())
      .then((res) =>
        res.data.children.map((item) => {
          const subredditData = {
            title: item.data.title,
            icon_img: item.data.icon_img,
            url: item.data.url,
            id: item.data.id,
          };
          return subredditData;
        })
      );
    return subreddits;
  }
);

export const subredditSlice = createSlice({
  name: 'subreddit',
  initialState: {
    subreddits: [],
    subredditsStatus: '',
  },

  extraReducers: {
    //Reducers for fetching posts
    [fetchSubreddit.pending]: (state, action) => {
      state.subredditsStatus = 'loading';
    },
    [fetchSubreddit.fulfilled]: (state, action) => {
      state.subredditsStatus = 'succeeded';
      state.subreddits = action.payload;
    },
    [fetchSubreddit.rejected]: (state, action) => {
      state.subredditsStatus = 'failed';
    },
  },
});

export const selectSubreddits = (state) => state.subreddit.subreddits;
export const selectSubredditsStatus = (state) =>
  state.subreddit.subredditsStatus;
export default subredditSlice.reducer;
