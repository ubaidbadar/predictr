import React from 'react';
// import Daimond_2 from '../../../icons-v2/Daimond_2';
import { Link } from 'react-router-dom';

export default function SetSubscribeButton({ prem, className, user }) {
    const Root = user ? 'label' : Link, props = user ? { htmlFor: 'Setup Subscription Open' } : {to: '#login'}
    return (
        <Root {...props}
            className={`btn-primary ${prem ? 'bg-accent-6' : 'bg-gradient-6 text-surface-1'} ${className}`}
        >
            {prem ? "Edit" : <> Setup</>} Subscription
        </Root>
    )
}