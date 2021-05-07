import React from 'react';

const Post = ({ post }) => {
  const { title, author, url } = post;

  return (
    <div>
      <h1>{title}</h1>
      <h2>{author}</h2>
      <img src={url} height='200' width='200' alt='' />
    </div>
  );
};

export default Post;
