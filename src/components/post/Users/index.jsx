import React from 'react';
import UserAvatar from '../../UserAvatar/UserAvatar';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import ToolTip from '../../../ui-v2/ToolTip/ToolTip';
import LikesModal from '../LikesModal';

const Users = ({ likes, isLoggedIn, total_likes, ...props }) => {
    const length = likes.length;
    const last = likes[length - 1];
    const total = total_likes - 1;

    return (
        <div className={`d-flex small text-accent-4 small align-items-center ${styles.root}`}>
            {likes.map(user => (
                <ToolTip title={user.name} key={user._id}>
                    <Link to={isLoggedIn ? `/leaderboard/user/${user._id}` : { hash: 'login' }}>
                        <UserAvatar className="smaller" {...user} />
                    </Link>
                </ToolTip>
            ))}
            <Link to={isLoggedIn ? `/leaderboard/user/${last._id}` : { hash: 'login' }} className='btn-text text-accent-4 me-1'>{last.name}</Link>
            <LikesModal isLoggedIn={isLoggedIn} {...props}
                component={handler => (
                    <button onClick={handler}
                        className='btn btn-text small text-accent-4'
                    >
                        {total > 0 && `and ${total} other${total > 2 ? 's' : ''}`} liked this.
                    </button>
                )}
            />  
        </div>
    )
}

export default Users;
