import Post from '../Post/Post';
import { useSelector } from 'react-redux';
import {
  selectPosts,
  selectPostsStatus,
} from '../../../features/redditSlice/redditSlice';
import { Link } from 'react-router-dom';
import NoResults from '../NoResults/NoResults';
import { selectSubreddits } from '../../../features/subredditSlice/subredditSlice';

import './Subreddit.scss';

const Subreddit = () => {
  const posts = useSelector(selectPosts);
  const postsStatus = useSelector(selectPostsStatus);
  const subreddits = useSelector(selectSubreddits);

  return (
    <div>
      <ul>
        {subreddits.map((item) => (
          <li key={item.id}>
            {item.icon_img !== '' && <img src={item.icon_img} width='25px' />}{' '}
            <span>{item.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Subreddit;
