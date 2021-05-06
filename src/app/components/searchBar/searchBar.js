import { render } from '@testing-library/react';
import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  selectSearchTerm,
  setSearchTerm,
  clearSearchTerm,
} from '../../../features/searchTerm/searchTermSlice';

const SearchBar = () => {
  const searchTerm = useSelector(selectSearchTerm);
  const dispatch = useDispatch();

  const onSearchTermChangeHandler = (e) => {
    e.preventDefault();
    const userInput = document.getElementById('search').value;
    dispatch(setSearchTerm(userInput));
  };

  const onClearSearchTermHandler = () => {
    dispatch(clearSearchTerm());
  };

  return (
    <form onSubmit={onSearchTermChangeHandler}>
      <div>
        <input
          type='search'
          id='search'
          name='search'
          placeholder='Search...'
          required
        />
        <button type='submit' value='submit'>
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
