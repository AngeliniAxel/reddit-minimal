import { useDispatch } from 'react-redux';

import { setSearchTerm } from '../../../features/searchTermSlice/searchTermSlice';

import { useHistory } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './searchBar.scss';

const SearchBar = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onSearchTermChangeHandler = (e) => {
    e.preventDefault();
    const userInput = [];
    userInput.push(document.getElementById('search').value);
    userInput.push(
      document.querySelector('input[name="sortby"]:checked').value
    );
    dispatch(setSearchTerm(userInput));
    document.getElementById('search').value = '';
    history.push('/posts');
  };

  return (
    <div>
      <h1 className='brand'>
        Reddit<span className='minimal'>Minimal</span>
      </h1>
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
          <div className='checkbox'>
            <div className='sortBy'>Sort by:</div>
            <label className='container-radio'>
              <div className='radio-value'>Relevant</div>
              <input
                type='radio'
                name='sortby'
                value='relevant'
                checked
                readOnly
              />
              <span className='checkmark'></span>
            </label>
            <label className='container-radio'>
              <div className='radio-value'>Latest</div>
              <input type='radio' name='sortby' value='new' readOnly />
              <span className='checkmark'></span>
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
