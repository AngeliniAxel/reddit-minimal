import Post from '../Post/Post';
import Spinner from '../Spinner/Spinner';
import { useSelector } from 'react-redux';
import {
  selectPosts,
  selectPostsStatus,
} from '../../../features/reddit/redditSlice';
import { Link } from 'react-router-dom';

const Posts = () => {
  const posts = useSelector(selectPosts);
  const postsStatus = useSelector(selectPostsStatus);

  return (
    <div>
      {postsStatus == 'loading' && <Spinner />}
      {posts.map((post) => (
        <Link
          to={`posts/${post.id}`}
          style={{ textDecoration: 'none' }}
          key={post.id}
        >
          <Post post={post} />
        </Link>
      ))}
    </div>
  );
};

export default Posts;
