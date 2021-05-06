import Post from '../Post/Post';
import { useSelector } from 'react-redux';
import { selectPosts } from '../../../features/reddit/redditSlice';

const Posts = () => {
  const posts = useSelector(selectPosts);
  console.log(posts);

  return posts.map((post) => <Post post={post} key={post.id} />);
};

export default Posts;
