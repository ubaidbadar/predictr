import React, { useState } from 'react';
import axios from 'axios';
import CheckIcon from '../../../icons/check-circle';
import Spinner from '../../../ui/spinner';
import getAxiosMessage from '../../../lib/getAxiosMessage';

const AddComment = ({ className = '', onAdd, isReply, api = '/feed_comment', getUser, focus, _id, postId, checkLogin, isLoggedIn }) => {
    const [status, setStatus] = useState('active');
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
        <form onSubmit={onSubmit} className={`position-relative d-flex gap-2 align-items-center ${className}`}>
            <input
                onClick={checkLogin}
                type="text"
                autoFocus={focus}
                disabled={!isLoggedIn || isWorking}
                className='text-field flex-1 bg-surface-3' name='message'
                placeholder={`Add ${isReply ? 'reply' : 'comment'}`}
                id={_id}
            />
            {getUser && getUser('order-1')}
            <button className='d-none' />
            {isWorking && (
                <div className='position-absolute translate-middle-y top-50 start-0 ms-3'>
                    {status === 'loading' ? <Spinner fontSize='0.25rem' /> : <CheckIcon className='h5 text-accent-3' />}
                </div>
            )}
        </form>
    )
}


export default AddComment;