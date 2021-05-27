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
            selftext: item.data.selftext,
            permalink: item.data.permalink,
            id: item.data.id,
            ups: item.data.ups,
            created_utc: item.data.created_utc,
            num_comments: item.data.num_comments,
          };
          if (item.data.post_hint === 'hosted:video' && item.data.media)
            postData.media = item.data.media.reddit_video.scrubber_media_url;
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
            selftext: item.data.selftext,
            permalink: item.data.permalink,
            id: item.data.id,
            ups: item.data.ups,
            created_utc: item.data.created_utc,
            num_comments: item.data.num_comments,
          };
          if (item.data.post_hint === 'hosted:video' && item.data.media)
            postData.media = item.data.media.reddit_video.scrubber_media_url;
          return postData;
        })
      );
    return posts;
  }
);

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    list: [],
    status: '',
  },

  extraReducers: {
    //Reducers for fetching posts
    [fetchPosts.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.list = action.payload;
    },
    [fetchPosts.rejected]: (state, action) => {
      state.status = 'failed';
    },
    [fetchPostsFromSubreddit.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchPostsFromSubreddit.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.list = action.payload;
    },
    [fetchPostsFromSubreddit.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

export const selectPosts = (state) => state.posts.list;
export const selectPostsStatus = (state) => state.posts.status;
export default postsSlice.reducer;
