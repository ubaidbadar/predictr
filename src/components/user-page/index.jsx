import React from 'react';
import useGet from '../../hooks/useGet';
import getProfile from '../../lib/getProfile';
import withBoard from '../../hoc/withBoard';
import Posts from '../posts';
import Stats from '../stats';
import Follow from '../follow';
import Filters from '../../live/profile-page/filters';
import FiltersModal from '../filters-modal';
import FiltersIcon from '../../icons/filters';

const UserPage = props => {
    const { data, err, Loader } = useGet(props.api + (props.search || ''));
    if (Loader) return <Loader className='absolute-middle' />
    if (err) return <h3 className='absolute-middle text-center text-accent-2'>{err}</h3>
    const isUser = props.userId === props.user?._id, user = getProfile(isUser ? props.user : data);
    return (
        <div className="leaderboard mt-4">
            {!props.isMobile && <Filters />}
            <div className='d-grid gap-2'>
                <Posts
                    posts={data.posts}
                    premium={data.premium}
                    is_following={data.is_following}
                    {...props}
                    userId={user}
                />
            </div>
            <div className='-order-1 lg:order-initial flex flex-col gap-inherit sticky'>
                <Stats {...data}
                    data={data}
                    isUser={isUser}
                    isLoggedIn={props.isLoggedIn}
                    user={{
                        ...user,
                        followers: data.followers,
                        followings: data.followings,
                        is_following: data.is_following,
                        position: data.position,
                    }}
                >
                    <Follow {...props} className="btn-primary w-full mt-4" userId={user._id} is_following={data.is_following} />
                </Stats>
                <div className='flex-between border-b-1 pb-3 pt-1 border-light-0'>
                    <b className='text-base'>Predictions</b>
                    <FiltersModal />
                    <label htmlFor="Predictions-Filter-Modal" className="text-md btn-icon no-space">
                    <FiltersIcon />
                </label>
                </div>
            </div>
        </div>
    )
}

export default withBoard(UserPage);