import React from 'react';
import Reply from '../Reply';
import dayjs from 'dayjs';
import Avatar from '../../avatar';
import { Link } from 'react-router-dom';

const Comment = props => (
    <div>
        <Link to={props.isLoggedIn ? "/" : {hash: "login"} } className='flex-center hover:underline text-gray-1 gap-2'>
            <Avatar {...props.userId} className="text-xl" />
            <b className='text-dark-0 text-sm font-semibold'>{props.userId.name}</b>
            {dayjs(props.createdOn).fromNow()}
        </Link>
        <div className='ml-8'>
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