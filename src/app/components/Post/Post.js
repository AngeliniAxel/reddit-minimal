import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';

import './Post.scss';

const Post = ({ post }) => {
  const {
    title,
    author,
    subreddit,
    url,
    post_hint,
    is_video,
    permalink,
    thumbnailUrl,
    id,
    ups,
    created_utc,
    num_comments,
  } = post;

  return (
    <div>
      {(post_hint === 'image' || post_hint === 'self') && (
        <div className='post-container'>
          <h3>{title}</h3>
          {post_hint === 'image' && (
            <div className='imgContainer'>
              <img src={url} alt='posted by user' />
            </div>
          )}
          <div className='info'>
            <h4>
              <span className='detail'>Posted by</span> {author}
            </h4>
            <h4>
              <FontAwesomeIcon icon={faComments} size='2x' />
              <span className='comments'>{num_comments}</span>
            </h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
