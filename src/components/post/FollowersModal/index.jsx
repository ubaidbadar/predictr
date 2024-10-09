import React  from 'react';
import Model from '../../../ui-v2/Modal/Model';
import useGet from '../../../hooks/useGet';
import User from '../../LeaderBoardComponents/User/User';

const Main = props => {
    const { data, Loader } = useGet(`/fetch-follows/${props.userId}`, { follow: props.title.toLowerCase() });
    if (Loader) return <Loader />
    return data ? data.map(user => <User isLoggedIn={true} className='fw-normal' {...user.userId} />) : "";
}

const FollowModal = ({ component, ...props }) => {
    return (
        <Model component={component} title={props.title} isNormal={true}
            actions={hide => <button className='btn btn-primary' onClick={hide}>Close</button>}
        >
            <Main {...props} />
        </Model>
    )
}


export default FollowModal;
