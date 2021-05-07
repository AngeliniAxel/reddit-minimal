import React from 'react';

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
      {post_hint == 'image' && (
        <div>
          <h3>title: {title}</h3>
          <h2>author: {author}</h2>
          <h3>subreddit: {subreddit}</h3>
          <img src={url} height='200' width='200' alt='' />
          <h3>{url}</h3>
          <h3>post_hint: {post_hint}</h3>
          <h3>is_video: {is_video ? 'yes' : 'no'}</h3>
          <h3>permalink: {permalink}</h3>
          <h3>thumbnailUrl: {thumbnailUrl}</h3>
          <h3>id: {id}</h3>
          <h3>ups: {ups}</h3>
          <h3>created_utc: {created_utc}</h3>
          <h3>num_comments {num_comments}</h3>
        </div>
      )}
    </div>
  );
};

export default Post;
