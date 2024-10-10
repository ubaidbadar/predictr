import React, { useMemo } from 'react';
import moment from 'moment/moment';
import getProfile from '../../utility/getProfile';
import User from '../LeaderBoardComponents/User/User';
import Footer from './Footer';
import Stats from './Stats/Stats';
import Follow from '../LeaderBoardComponents/Follow'
import ToolTip from '../../ui-v2/ToolTip/ToolTip';
import styles from './styles.module.scss';

const Post = ({
    stock_symbol,
    description,
    post_img,
    userId,
    _id,
    is_following,
    stock_name,
    isFollow = true,
    premium,
    onlyForSubscribers,
    ...props
}) => {
    const postedOn = moment(props.createdOn).local(), currentUser = props.user._id === userId._id;
    return (
        <div className='card p-md-4 p-3 d-grid overflow- small text-accent-4 gap-4'>
            <div className='d-flex w-100 gap-2 ms-auto align-items-center'>
                <User
                    className='ms-auto'
                    {...getProfile(userId)}
                    subtitle={
                        postedOn.isSame(new Date(), "day")
                            ? postedOn.fromNow() : postedOn.format('MMM DD, YYYY, hh:mm A')
                    }
                    {...props}
                />
                {!currentUser && (
                    <>
                        {premium && (
                            premium.subscribed ? (
                                <a href={`#unsubscribe=${userId._id}`} className='btn-border-2 bg-gradient-5'>
                                    Unsubscribe
                                </a>
                            ) : (
                                <a href={props.isLoggedIn ? `#subscribe=${userId._id}` : "#login"} className='btn-primary-2 bg-gradient-5'>
                                    Subscribe
                                </a>
                            )
                        )}
                        {isFollow && <Follow _id={userId._id} is_following={is_following} />}
                    </>
                )}
            </div>
            <div className={`d-flex subtitle text-normal fs-normal-sm flex-wrap align-items-center gap-2 ${styles.main}`}>
                I think <ToolTip title={stock_name}><b>{stock_symbol}</b></ToolTip> will go {props.allowed ? (
                    <>
                        <b>{props.estimated_direction} {props.estimated_change_percent}%</b> by <b><ToolTip title={moment(props.guess_date).local().format('LL')}>{moment(props.guess_date).local().format('MMM DD')}</ToolTip></b>
                        {description && <p className={`my-1 w-100`}>{description}</p>}
                    </>
                ) : (
                    <>
                        <b className={styles.blur}>del%</b> by <b className={styles.blur}>del Date</b>
                        {description && <p className={`my-0 w-100 p-1 ${styles.blur}`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum suscipit, inventore commodi sed, deleniti, ducimus labore illum nam cupiditate laudantium necessitatibus?</p>}
                    </>
                )}
            </div>
            {useMemo(() => (
                <>
                    <Stats {...props} />
                    {post_img !== "" && <img className='w-100' src={post_img} alt="" />}
                </>
            ), [])}
            <Footer postId={_id} userId={userId} {...props} is_agreed={props.agrees?.includes(props.user._id)} is_disagreed={props.disagrees?.includes(props.user._id)} />
        </div>
    )
}
 
export default Post;