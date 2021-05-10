import Post from '../Post/Post';
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

  const subred = fetch('https://www.reddit.com/subreddits/.json')
    .then((res) => res.json())
    .then((res) => res.data.children);
  console.log(subred);

  /* const subred = fetch('https://www.reddit.com/r/AskReddit/.json')
    .then((res) => res.json())
    .then((res) => res.data.children);
  console.log(subred); */

  https: return (
    <div>
      {postsStatus == 'loading' && <Spinner />}

      {postsStatus == 'succeeded' && posts.length == 0 ? (
        <NoResults />
      ) : (
        posts.map((post) => (
          <Link
            to={`posts/${post.id}`}
            style={{ textDecoration: 'none' }}
            key={post.id}
          >
            <Post post={post} />
          </Link>
        ))
      )}
    </div>
  );
};

export default Posts;
