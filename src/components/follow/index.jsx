import axios from "../../config/axios";
import BookMark from "../../icons/bookmark";
import styles from './styles.module.scss'
import getAxiosMessage from "../../lib/getAxiosMessage";

export default function Follow({ userId, is_following, isLoggedIn, setAuth, user, className }) {
    if (!isLoggedIn) return <a href="#login" className={`${styles.root} ${className}`}>Follow <BookMark /></a>
    return (
        <button
            className={`follow-${userId} ${className} ${styles.root} ${is_following ? styles.active : ''}`}
            onClick={e => {
                setAuth({
                    followings: user.followings + (e.target.classList.contains(styles.active) ? -1 : 1)
                })
                axios.put('/toggle_following', { userId }).catch(getAxiosMessage)
                const els = document.getElementsByClassName(className);
                for (const el of els) el.classList.toggle(styles.active)
            }}
        >Follow <BookMark /></button>
    )
}