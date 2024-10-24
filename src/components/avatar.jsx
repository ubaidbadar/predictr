import React, { useState } from 'react';

const Avatar = ({ name, profile_img, className, onClick }) => {
    const [image, setImage] = useState(profile_img);
    return (
        image ? <img className='UserAvatar' onError={() => setImage(false)} name={name} src={profile_img} /> : <span className={`UserAvatar ${className}`} onClick={onClick}>{name?.split(' ').map(part => part[0])}</span>
    )
}

export default Avatar;