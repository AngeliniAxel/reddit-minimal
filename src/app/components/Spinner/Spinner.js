import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import './Spinner.scss';

export default function Spinner() {
  return (
    <FontAwesomeIcon
      icon={faSpinner}
      size='2x'
      alt='Loading'
      className='spinner'
    />
  );
}
