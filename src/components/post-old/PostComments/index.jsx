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
            <AddComment {...props} _id={props.postId} onAdd={onAdd} className='w-100 mt-3' />
            {total > 0 && (
                <div className='card gap-4'>
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