import { useSelector } from 'react-redux';
import {
  selectComments,
  selectCommentsStatus,
} from '../../../features/postSlice/postSlice';
import Comment from './Comment';
import Spinner from '../Spinner/Spinner';

const Comments = () => {
  const comments = useSelector(selectComments);
  const commentsStatus = useSelector(selectCommentsStatus);

  return (
    <div>
      {commentsStatus == 'loading' && <Spinner />}
      {commentsStatus == 'succeeded' &&
        comments.map((comment) => {
          if (comment.author !== undefined) {
            return <Comment comment={comment} key={comment.id} />;
          }
        })}
    </div>
  );
};

export default Comments;
