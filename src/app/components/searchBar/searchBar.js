import { useDispatch } from 'react-redux';

import { setSearchTerm } from '../../../features/searchTerm/searchTermSlice';

import { useHistory } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

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
          <FontAwesomeIcon icon={faSearch} size='lg' />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
