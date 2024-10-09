import React from 'react';
import moment from 'moment/moment';
import Reply from '../Reply';
import Like from '../Like';
import User from '../../LeaderBoardComponents/User/User';

const Comment = props => (
    <div className='mt-2'>
        <User isLoggedIn={props.isLoggedIn} {...props.userId} className='d-flex' subtitle={moment(props.createdOn).fromNow()} />
        <div className='text-normal smaller' style={{ paddingLeft: 'calc(2.625em + 0.5rem)' }}>
            <div className='small'>
                <p className='m-0'>{props.message}</p>
                <div className='d-flex gap-3'>
                    <Like {...props} />
                    <label htmlFor={props.commentId || props._id} className='btn btn-text smaller text-accent-4'>Reply</label>
                </div>
                {props.onReply && <Reply commentId={props.commentId || props._id} {...props} />}
            </div>
        </div>
    </div>
)

export default Comment;