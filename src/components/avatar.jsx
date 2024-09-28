import React from 'react';

const Avatar = ({ name, profile_img, className, onClick }) => (
    <span className={`UserAvatar ${className}`} onClick={onClick}>
        {profile_img ? <img src={profile_img} /> : name?.split(' ').map(part => part[0])}
    </span>
)

export default Avatar;