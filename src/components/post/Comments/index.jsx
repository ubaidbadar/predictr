import React from 'react';
import Comment from '../Comment';

const Comments = ({ comments, total_likes, is_liked, ...props }) => comments.map(comment => <Comment key={comment._id} {...props} {...comment} commentId={comment._id} />)


export default Comments;