import React from 'react';
import './Comment.scss';

const Comment = ({ comment }) => {
  const { author, body } = comment;

  return (
    <div className='comment-container'>
      <div className='author'>
        <h4>
          {author}
          <span className='detail'> says</span>
        </h4>
      </div>
      <div className='wrapper-body'>
        <p className='body-text'>{body}</p>
      </div>
    </div>
  );
};

export default Comment;
