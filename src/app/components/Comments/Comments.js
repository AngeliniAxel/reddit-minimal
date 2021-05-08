import { useSelector } from 'react-redux';
import {
  selectComments,
  selectCommentsStatus,
} from '../../../features/postSlice/postSlice';
import Comment from './Comment';

const Comments = () => {
  const comments = useSelector(selectComments);
  const commentsStatus = useSelector(selectCommentsStatus);

  return (
    <div>
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
