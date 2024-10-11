import React, { useState } from 'react';
import AddComment from '../AddComment';
import Comments from '../Comments';
import LoadMore from '../LoadMore';
// import useSocket from '../../../hooks/useSocket';

const PostComments = ({ comments = [], total_comments = 0, total_replies = 0, ...props }) => {
    const [status, setStatus] = useState({
        cms: [...comments],
        total: total_comments + total_replies,
        total_cms: total_comments,
    });
    const { cms, total, total_cms } = status;
    const onAdd = comment => {
        setStatus({ cms: [comment, ...cms], total: total + 1, total_cms: total_cms + 1 });
    }
    const onLoad = comments => setStatus({ ...status, cms: cms.length === 1 ? comments : [...cms, ...comments] });
    const onReply = () => setStatus({ ...status, total: total + 1 });
    return (
        <>
            <small className='smaller m-auto ms-0'>{total_cms} comments</small>
            <AddComment {...props} _id={props.postId} onAdd={onAdd} className='w-100 mt-3' getUser={null} />
            {total > 0 && (
                <div className='w-100 border-top mt-3 pt-3 my-2'>
                    <Comments {...props} comments={cms} onReply={onReply} />
                    {total_cms > cms.length && (
                        <LoadMore {...props} onLoad={onLoad}
                            className='ms-auto'
                            title="View previous comments"
                            api={`/feed_comments/${props.postId}?page=${Math.floor(cms.length / 10) + 1}`}
                        />
                    )}
                </div>
            )}
        </>
    )
}

export default PostComments;