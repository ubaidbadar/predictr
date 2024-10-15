import React, { useState } from 'react';
// import useSocket from '../../../hooks/useSocket';
import AddComment from '../AddComment';
import Comments from '../Comments';
import LoadMore from '../Load';
import styles from './reply.module.scss';

const Reply = ({ total_replies, onReply, _id, replies: rps, ...props }) => {
    const [status, setStatus] = useState({ total: total_replies || 0, replies: rps });
    const { replies = [], total } = status;
    const length = replies.length;
    const onAdd = reply => {
        setStatus({ replies: [...replies, reply], total: total + 1 });
        onReply();
    }
    return (
        <div className='d-flex flex-column'>
            <Comments {...props} commentId={_id} comments={replies} />
            <div className='d-flex gap-2'>
                {total > 0 && length !== total && (
                    <LoadMore
                        {...props}
                        title={`${total - length} repl${length > 1 ? 'ies' : 'y'}`}
                        className='smaller'
                        onLoad={newReplies => setStatus({ replies: [...replies, ...newReplies], total })}
                        api={`/feed_comment_replies/${_id}?page=${Math.floor(replies.length / 10) + 1}`}
                    />
                )}
            </div>
            <AddComment {...props}
                className={`mt-2 flex-1 smaller ${styles.input}`}
                onAdd={onAdd}
                api='/feed_comment_reply'
                isReply={true}
                _id={props.commentId}
            />
        </div>
    )
}

export default Reply;