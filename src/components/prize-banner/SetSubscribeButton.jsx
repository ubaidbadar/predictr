import React from 'react';
// import Daimond_2 from '../../../icons-v2/Daimond_2';

export default function SetSubscribeButton({ isLoggedIn, className, user }) {
    const Root = isLoggedIn ? 'label' : 'a', props = isLoggedIn ? { htmlFor: 'Setup Subscription Open' } : {href: '#login'}
    return (
        <Root {...props}
            className={`btn-primary ${user.premium ? 'bg-accent-6' : 'bg-gradient-6 text-surface-1'} ${className}`}
        >
            {user.premium ? "Edit" : <> Setup</>} Subscription
        </Root>
    )
}