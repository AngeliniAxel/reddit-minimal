import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPosts } from '../../../features/reddit/redditSlice';
import {
  setPost,
  selectPost,
  fetchComments,
} from '../../../features/postSlice/postSlice';
import Post from '../../components/Post/Post';

const IndividualPost = ({ match }) => {
  const id = match.params.id;
  const posts = useSelector(selectPosts);
  const dispatch = useDispatch();
  const postArray = posts.filter((post) => post.id == id);

  dispatch(setPost(postArray[0]));

  const post = useSelector(selectPost);

  useEffect(() => {
    dispatch(fetchComments(post.permalink));
  }, [id]);
  /*
  const prueba = async () => {
    const posts = await fetch(
      `https://www.reddit.com/r/aww/comments/n53rq7/this_is_kabosu_shes_15_years_old_and_was_the.json`
    ).then((res) => res.json());
    return posts;
  };

  console.log(prueba());
  */

  return (
    <div>
      <Post post={post} />
    </div>
  );
};

export default IndividualPost;
