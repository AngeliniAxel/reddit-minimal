import React from 'react';
import './Comment.scss';

const Comment = ({ comment }) => {
  const { author, body, id, created_utc } = comment;

  return (
    <div className='responsive'>
      <div className='author'>
        <h4>
          {author}
          <span className='detail'> says</span>
        </h4>
      </div>
      <p className='body'>{body}</p>
    </div>
  );
};

export default Comment;
