import { useDispatch } from 'react-redux';

import { setSearchTerm } from '../../../features/searchTerm/searchTermSlice';

import './searchBar.scss';

const SearchBar = () => {
  const dispatch = useDispatch();

  const onSearchTermChangeHandler = (e) => {
    e.preventDefault();
    const userInput = document.getElementById('search').value;
    dispatch(setSearchTerm(userInput));
  };

  return (
    <form onSubmit={onSearchTermChangeHandler} className='container'>
      <div className='searchBar'>
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
