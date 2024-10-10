import { Link } from "react-router-dom";
import styles from './styles.module.scss';
import Avatar from "../avatar";

const User = ({ className = '', subtitle, isLoggedIn = true, ...props }) => (
    <Link to={isLoggedIn ? `/user/${props._id}` : { hash: 'login' }}
        className={`${styles.root} text-dark-0 ${className}`}
        name={props.name}
        subtitle={subtitle}
    >
        <Avatar {...props} />
    </Link>
)

export default User;