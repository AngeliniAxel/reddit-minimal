import Post from './Post';
import Spinner from '../Spinner/Spinner';
import { useSelector } from 'react-redux';
import {
  selectPosts,
  selectPostsStatus,
} from '../../../features/redditSlice/redditSlice';
import { Link } from 'react-router-dom';
import NoResults from '../NoResults/NoResults';

const Posts = () => {
  const posts = useSelector(selectPosts);
  const postsStatus = useSelector(selectPostsStatus);

  return (
    <div className='posts-wrapper'>
      {postsStatus === 'loading' && <Spinner />}

      {postsStatus === 'succeeded' && posts.length === 0 ? (
        <NoResults />
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <Link to={`posts/${post.id}`} style={{ textDecoration: 'none' }}>
              <Post post={post} />
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default Posts;
