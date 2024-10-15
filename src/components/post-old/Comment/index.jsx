import React from 'react';
import Reply from '../Reply';
import dayjs from 'dayjs';
import Avatar from '../../avatar';
import { Link } from 'react-router-dom';
import CommentButtons from '../../post/comment-agree';

const Comment = props => (
    <div>
        <Link to={props.isLoggedIn ? "/" : { hash: "login" }} className='flex-center hover:underline text-gray-1 gap-2'>
            <Avatar {...props.userId} className="text-xl" />
            <b className='text-dark-0 text-sm font-semibold'>{props.userId.name}</b>
            {dayjs(props.createdOn).fromNow()}
        </Link>
        <div className='ml-8'>
            <div className='small flex-col gap-1'>
                <p className='m-0'>{props.message}</p>
                <CommentButtons {...props} />
                {props.onReply && <Reply commentId={props.commentId || props._id} {...props} />}
            </div>
        </div>
    </div>
)

export default Comment;