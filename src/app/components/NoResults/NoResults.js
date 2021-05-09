import React from 'react';

import { selectSearchTerm } from '../../../features/searchTerm/searchTermSlice';
import { useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadTear } from '@fortawesome/free-solid-svg-icons';

import './NoResults.scss';

export default function NoResults() {
  const term = useSelector(selectSearchTerm);
  return (
    <div className='noResults'>
      <FontAwesomeIcon icon={faSadTear} size='2x' alt='sad' className='sad' />
      <h3> Sorry, there were no results for '{term[0]}'</h3>
    </div>
  );
}
