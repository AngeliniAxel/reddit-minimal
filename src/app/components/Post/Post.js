import React from 'react';
import YouTube from 'react-youtube';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';

import './Post.scss';

const Post = ({ seeBody, post }) => {
  const {
    title,
    author,
    subreddit,
    url,
    post_hint,
    is_video,
    media,
    selftext,
    permalink,
    thumbnailUrl,
    id,
    ups,
    created_utc,
    num_comments,
  } = post;

  function youTubeGetID(url) {
    url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    return url[2] !== undefined ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
  }

  function shortenBody(body) {
    if (body.length > 400) return body.slice(0, 400) + '... SEE MORE';
  }

  return (
    <div>
      <div className='post-container'>
        <h3>{title}</h3>
        {post_hint === 'image' && (
          <div className='media-container'>
            <img src={url} alt='posted by user' />
          </div>
        )}
        {post_hint === 'rich:video' && (
          <div className='media-container'>
            <YouTube className='video' videoId={youTubeGetID(url)} />
          </div>
        )}
        {post_hint === 'hosted:video' && (
          <div className='media-container'>
            <video className='self-video' controls aria-label={title}>
              <source type='video/mp4' src={media} />
            </video>
          </div>
        )}
        {selftext && (
          <p className='selftext'>
            {seeBody ? selftext : shortenBody(selftext)}
          </p>
        )}
        {!post_hint && !selftext && subreddit !== 'AskReddit' && (
          <a href={url} target='_blank'>
            Click to see more
          </a>
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
    </div>
  );
};

export default Post;
