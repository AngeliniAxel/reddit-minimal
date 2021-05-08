import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchComments = createAsyncThunk(
  'selectedPost/fetchComments',
  async (term) => {
    const comments = await fetch(`https://www.reddit.com${term}.json`)
      .then((res) => res.json())
      .then((res) =>
        res[1].data.children.map((item) => {
          const comment = {
            author: item.data.author,
            body: item.data.body,
            id: item.data.id,
            created_utc: item.data.created_utc,
          };
          return comment;
        })
      );
    console.log(comments);
    return comments;
  }
);

export const postSlice = createSlice({
  name: 'selectedPost',
  initialState: {
    post: {},
    comments: [],
    commentsStatus: '',
  },
  reducers: {
    setPost(state, action) {
      state.post = action.payload;
    },
    setComments(state, action) {
      state.comments = action.payload;
    },
  },
  extraReducers: {
    //Reducers for fetching posts
    [fetchComments.pending]: (state, action) => {
      state.commentsStatus = 'loading';
    },
    [fetchComments.fulfilled]: (state, action) => {
      state.commentsStatus = 'succeeded';
      state.comments = action.payload;
    },
    [fetchComments.rejected]: (state, action) => {
      state.commentsStatus = 'failed';
    },
  },
});

export const selectPost = (state) => state.selectedPost.post;
export const selectComments = (state) => state.selectedPost.comments;
export const selectCommentsStatus = (state) =>
  state.selectedPost.commentsStatus;
export const { setPost, setComments } = postSlice.actions;
export default postSlice.reducer;
