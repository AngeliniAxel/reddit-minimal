import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk(
  'reddit/fetchPosts',
  async (term) => {
    const [input, sortby] = term;
    const posts = await fetch(
      `https://www.reddit.com/search.json?q=${input}&sort=${sortby}`
    )
      .then((res) => res.json())
      .then((res) =>
        res.data.children.map((item) => {
          const postData = {
            title: item.data.title,
            author: item.data.author,
            subreddit: item.data.subreddit,
            url: item.data.url,
            post_hint: item.data.post_hint,
            is_video: item.data.is_video,
            permalink: item.data.permalink,
            id: item.data.id,
            ups: item.data.ups,
            created_utc: item.data.created_utc,
            num_comments: item.data.num_comments,
          };
          return postData;
        })
      );
    return posts;
  }
);

export const fetchPostsFromSubreddit = createAsyncThunk(
  'reddit/fetchPosts',
  async (term) => {
    const posts = await fetch(`https://www.reddit.com${term}.json`)
      .then((res) => res.json())
      .then((res) =>
        res.data.children.map((item) => {
          const postData = {
            title: item.data.title,
            author: item.data.author,
            subreddit: item.data.subreddit,
            url: item.data.url,
            post_hint: item.data.post_hint,
            is_video: item.data.is_video,
            permalink: item.data.permalink,
            id: item.data.id,
            ups: item.data.ups,
            created_utc: item.data.created_utc,
            num_comments: item.data.num_comments,
          };
          return postData;
        })
      );
    return posts;
  }
);

export const redditSlice = createSlice({
  name: 'reddit',
  initialState: {
    posts: [],
    postsStatus: '',
  },

  extraReducers: {
    //Reducers for fetching posts
    [fetchPosts.pending]: (state, action) => {
      state.postsStatus = 'loading';
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.postsStatus = 'succeeded';
      state.posts = action.payload;
    },
    [fetchPosts.rejected]: (state, action) => {
      state.postsStatus = 'failed';
    },
    [fetchPostsFromSubreddit.pending]: (state, action) => {
      state.postsStatus = 'loading';
    },
    [fetchPostsFromSubreddit.fulfilled]: (state, action) => {
      state.postsStatus = 'succeeded';
      state.posts = action.payload;
    },
    [fetchPostsFromSubreddit.rejected]: (state, action) => {
      state.postsStatus = 'failed';
    },
  },
});

export const selectPosts = (state) => state.reddit.posts;
export const selectPostsStatus = (state) => state.reddit.postsStatus;
export default redditSlice.reducer;
