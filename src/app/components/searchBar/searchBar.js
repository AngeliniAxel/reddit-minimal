import { useDispatch } from 'react-redux';

import { setSearchTerm } from '../../../features/searchTerm/searchTermSlice';

import { Link, withRouter, useHistory } from 'react-router-dom';

import './searchBar.scss';

const SearchBar = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onSearchTermChangeHandler = (e) => {
    e.preventDefault();
    const userInput = document.getElementById('search').value;
    dispatch(setSearchTerm(userInput));
    document.getElementById('search').value = '';
    history.push('/posts');
  };

  return (
    <form onSubmit={onSearchTermChangeHandler} className='container'>
      <div className='searchBar'>
        {console.log(Math.random())}
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
