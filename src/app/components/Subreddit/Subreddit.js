import { useSelector, useDispatch } from 'react-redux';
import { selectSubreddits } from '../../../features/subredditSlice/subredditSlice';
import { fetchPostsFromSubreddit } from '../../../features/redditSlice/redditSlice';
import { useHistory } from 'react-router-dom';

import './Subreddit.scss';
import { useEffect } from 'react';

const Subreddit = () => {
  const subreddits = useSelector(selectSubreddits);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = (e) => {
    dispatch(fetchPostsFromSubreddit(e.target.id));
    history.push('/posts');
  };

  return (
    <div>
      <ul>
        {subreddits.map((item) => (
          <li key={item.id}>
            <button
              onClick={handleClick}
              className='noDecoration-button'
              id={item.url}
            >
              {item.icon_img !== '' && item.icon_img !== null && (
                <img
                  id={item.url}
                  alt='icon'
                  src={item.icon_img}
                  width='25px'
                />
              )}{' '}
              <span id={item.url}>{item.title}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Subreddit;
