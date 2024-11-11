import React from 'react';
import useGet from '../../hooks/useGet';
import getProfile from '../../lib/getProfile';
import withBoard from '../../hoc/withBoard';
import Posts from '../posts';
import Stats from '../stats';
import Follow from '../follow';

const UserPage = props => {
    const { data, err, Loader } = useGet(props.api + (props.search || ''));
    if (Loader) return <Loader className='mx-auto' />
    if (err) return <h3 className='absolute-middle text-center text-accent-2'>{err}</h3>
    const isCurrentUser = props.userId === props.user?._id, user = getProfile(isCurrentUser ? props.user : data);
    return (
        <>
            <div className='d-grid gap-2'>
                <Posts
                    posts={data.posts}
                    premium={data.premium}
                    is_following={data.is_following}
                    {...props}
                    userId={user}
                />
            </div>
            <Stats isLoggedIn={props.isLoggedIn} {...data} data={data}
                user={{
                    ...user,
                    followers: data.followers,
                    followings: data.followings,
                    is_following: data.is_following,
                    position: data.position,
                }}
                isCurrentUser={isCurrentUser}
            >
                <Follow {...props} className="btn-primary w-full mt-4" userId={user._id} is_following={data.is_following} />
            </Stats>
        </>
    )
}

export default withBoard(UserPage);