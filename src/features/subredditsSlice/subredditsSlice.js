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

export const subredditsSlice = createSlice({
  name: 'subreddits',
  initialState: {
    list: [],
    status: '',
  },

  extraReducers: {
    //Reducers for fetching posts
    [fetchSubreddit.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchSubreddit.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.list = action.payload;
    },
    [fetchSubreddit.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

export const selectSubreddits = (state) => state.subreddits.list;
export const selectSubredditsStatus = (state) => state.subreddits.status;
export default subredditsSlice.reducer;
