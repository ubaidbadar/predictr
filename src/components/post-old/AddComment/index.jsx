import React, { useState } from 'react';
import axios from 'axios';
import CheckIcon from '../../../icons/check-circle';
import Spinner from '../../../ui/spinner';
import getAxiosMessage from '../../../lib/getAxiosMessage';
import Avatar from '../../avatar';
import Plane from '../../../icons/plane';

const AddComment = ({ className = '', onAdd, isReply, api = '/feed_comment', getUser, focus, _id, postId, checkLogin, isLoggedIn, user }) => {
    const [status, setStatus] = useState('loading');
    const isWorking = status !== 'active';
    const onSubmit = e => {
        if (isWorking) return;
        setStatus('loading');
        e.preventDefault();
        const message = e.target.message.value.trim();
        if (message !== '') {
            const data = { message, postId };
            if (_id !== postId) data.commentId = _id;
            axios.put(api, data)
                .then(res => {
                    onAdd(res.data);
                    setStatus('done');
                    setTimeout(() => {
                        e.target.reset();
                        setStatus('active');
                    }, 500);
                })
                .catch(err => {
                    setStatus('active');
                    getAxiosMessage(err)
                })
        }
    }
    return (
        <form onSubmit={onSubmit} className={`bg-light-1 flex-center relative pl-3 rounded-3 ${className}`}>
            <Avatar className="text-2xl" {...user} />
            <input
                onClick={checkLogin}
                type="text"
                autoFocus={focus}
                disabled={!isLoggedIn || isWorking}
                className='outline-none h-full py-4 flex-1 bg-none pl-3'
                name='message'
                placeholder={`Add ${isReply ? 'reply' : 'comment'}`}
                id={_id}
            />
            {getUser && getUser('order-1')}
            {isWorking ? (
                status === "loading" ? <Spinner className='text-exs' /> : <CheckIcon className='h5 text-accent-3' />
            ) : (
                <button className='btn-icon text-primary-0 text-lg'>
                    <Plane />
                </button>
            )}

        </form>
    )
}


export default AddComment;