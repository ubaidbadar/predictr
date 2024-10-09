import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useGet from '../../../hooks/useGet';
import Model from '../../../ui-v2/Modal/Model';
// import Pagination from '../../../ui-v2/Pagination/Pagination';
import Spinner from '../../../ui-v2/Spinner/Spinner';
import User from '../../LeaderBoardComponents/User/User';
// import styles from './styles.module.scss';

const Main = ({ postId, ...props }) => {
    const { data, err } = useGet(`/fetch_leaderboard_likes/${postId}`, { limit: 10, page: 1 });
    return (
        <Model {...props} show={true} title='Post Likes' isNormal={true}
            actions={hide => <button className='btn btn-primary' onClick={hide}>Close</button>}
        >
            {!data && !err && <Spinner fontSize='0.8rem' className='m-auto text-accent-3' />}
            {data && (
                data.map(user => <User isLoggedIn={props.isLoggedIn} className='fw-normal' {...user} />)
            )}
        </Model>
    )
}

const LikesModal = ({ component, ...props }) => {
    const [open, setOpen] = useState(false);
    return (
        <>
            {component && component(setOpen)}
            {open && <Main {...props} closeHandler={() => setOpen(false)} />}
        </>
    )
}

export default LikesModal;
