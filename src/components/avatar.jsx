import React from 'react';

const Avatar = ({ name, profile_img, className, onClick }) => (
    profile_img ? <img className='UserAvatar' name={name} src={profile_img} /> : <span className={`UserAvatar ${className}`} onClick={onClick}>{name?.split(' ').map(part => part[0])}</span>
)

export default Avatar;