import React, { useState } from 'react';
import axios from 'axios';
import Check from '../../../icons/check-circle';
import getAxiosMessage from '../../../lib/getAxiosMessage';
import Avatar from '../../avatar';
import Plane from '../../../icons/plane';

const AddComment = ({ className = '', onAdd, isReply, api = '/feed_comment', focus, _id, postId, checkLogin, isLoggedIn, user, ...props }) => {
    const [status, setStatus] = useState('');
    const onSubmit = e => {
        if (status) return;
        setStatus('loading');
        e.preventDefault();
        const message = e.target.message.value.trim();
        if (message !== '') {
            const data = { message, postId };
            console.log(data);
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
                disabled={!isLoggedIn || status}
                className='outline-none h-full py-4 flex-1 bg-none pl-3'
                name='message'
                placeholder={`Add ${isReply ? 'reply' : 'comment'}`}
                id={_id}
            />
            {status ? (
                status === "loading" ? <div className='loader loading text-lg mr-2' /> : <Check className='text-green-0 mr-2 w-5 h-5' />
            ) : (
                <button className='btn-icon text-primary-0 text-lg'>
                    <Plane />
                </button>
            )}
        </form>
    )
}


export default AddComment;