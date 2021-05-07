import Post from '../Post/Post';
import { useSelector } from 'react-redux';
import { selectPosts } from '../../../features/reddit/redditSlice';
import { Link } from 'react-router-dom';

const Posts = () => {
  const posts = useSelector(selectPosts);

  return posts.map((post) => (
    <Link to={`posts/${post.id}`} style={{ textDecoration: 'none' }}>
      <Post post={post} key={post.id} />
    </Link>
  ));
};

export default Posts;
