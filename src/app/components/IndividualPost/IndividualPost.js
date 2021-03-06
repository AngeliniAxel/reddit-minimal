import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPosts } from '../../../features/postsSlice/postsSlice';
import {
  setPost,
  selectPost,
  fetchComments,
} from '../../../features/postSlice/postSlice';
import Post from '../../components/Post/Post';
import Comments from '../Comments/Comments';

const IndividualPost = ({ match }) => {
  const id = match.params.id;
  const posts = useSelector(selectPosts);
  const dispatch = useDispatch();

  const postArray = posts.find((post) => post.id === id);

  dispatch(setPost(postArray));

  const post = useSelector(selectPost);

  useEffect(() => {
    dispatch(fetchComments(post.permalink));
  }, [id]);

  return (
    <div className='individual-container'>
      <Post seeBody={true} post={post} />
      <Comments />
    </div>
  );
};

export default IndividualPost;
