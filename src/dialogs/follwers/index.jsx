import Model from '../../ui/modal/modal';
import useGet from '../../hooks/useGet';
import User from '../../components/user';

const Main = props => {
    const { data, Loader } = useGet(`/fetch-follows/${props.userId}`, { follow: props.title.toLowerCase() });
    if (Loader) return <Loader />
    return data ? data.map(user => <User key={user._id} isLoggedIn={true} className='fw-normal' {...user.userId} />) : "";
}

const FollowModal = ({ component, ...props }) => {
return (
        <Model component={component} title={props.title}
            actions={hide => <button className='btn btn-primary' onClick={hide}>Close</button>}
        >
            <Main {...props} />
        </Model>
    )
}


export default FollowModal;
