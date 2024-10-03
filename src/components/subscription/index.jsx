import React, { useCallback } from 'react';
import Main from './Main';


export default function SubscribeModal({ location, posts, onSuccess, userId, user, ...props }) {
    const hash = location.hash;
    const [status, id] = hash.split('=');
    const close = useCallback(() => props.history.replace({ hash: '', search: window.location.search }), []);
    if (status !== '#subscribe') return "";
    const post = posts.find(post => (post.userId?._id || userId._id) === id);
    if (!post || !post.premium) return "";
    return status === '#subscribe' && (
        <Main
            {...props}
            auth={user}
            close={close}
            user={post.userId || userId}
            prem={post.premium}
            onSubscribe={(res) => {
                posts.forEach(post => post.userId._id === id && (post.premium.subscribed = true));
                close();
            }}
        />
    )
}