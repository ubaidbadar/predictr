import React from 'react';
import Reply from '../Reply';
import User from '../../user';
import dayjs from 'dayjs';

const Comment = props => (
    <div className='mt-2'>
        <User isLoggedIn={props.isLoggedIn} {...props.userId} className='d-flex' subtitle={dayjs(props.createdOn).fromNow()} />
        <div className='text-normal smaller' style={{ paddingLeft: 'calc(2.625em + 0.5rem)' }}>
            <div className='small'>
                <p className='m-0'>{props.message}</p>
                <div className='d-flex gap-3'>
                    <label htmlFor={props.commentId || props._id} className='btn btn-text smaller text-accent-4'>Reply</label>
                </div>
                {props.onReply && <Reply commentId={props.commentId || props._id} {...props} />}
            </div>
        </div>
    </div>
)

export default Comment;