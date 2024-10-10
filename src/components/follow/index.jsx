import axios from "axios";
import BookMark from "../../icons/bookmark";
import styles from './styles.module.scss'
import getAxiosMessage from "../../lib/getAxiosMessage";

export default function Follow({ userId, is_following }) {
    const className = `follow-${userId}`;
    return (
        <button
            className={`${styles.root} ${is_following ? styles.active : ''} ${className}`}
            onClick={() => {
                axios.put('/toggle_following', { userId }).catch(getAxiosMessage)
                const els = document.getElementsByClassName(className);
                for (const el of els) el.classList.toggle(styles.active)
            }}
        >Follow <BookMark /></button>
    )
}