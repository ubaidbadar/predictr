import { Link } from "react-router-dom";
import styles from './styles.module.scss';
import Avatar from "../avatar";

const User = ({ className = '', subtitle, isLoggedIn, ...props }) => (
    <Link to={isLoggedIn ? `/leaderboard/user/${props._id}` : { hash: 'login' }}
        className={`${styles.root} text-normal ${className}`}
        name={props.name}
        subtitle={subtitle}
    >
        <Avatar {...props} />
    </Link>
)

export default User;