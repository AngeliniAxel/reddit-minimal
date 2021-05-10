import { createSlice } from '@reduxjs/toolkit';

export const searchTermSlice = createSlice({
  name: 'searchTerm',
  initialState: {
    term: [],
  },
  reducers: {
    setSearchTerm(state, action) {
      state.term = action.payload;
    },
    clearSearchTerm(state, action) {
      state.term = '';
    },
  },
});

export const selectSearchTerm = (state) => state.searchTerm.term;
export const { setSearchTerm, clearSearchTerm } = searchTermSlice.actions;
export default searchTermSlice.reducer;
