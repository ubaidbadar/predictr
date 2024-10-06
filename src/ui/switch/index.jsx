import styles from './styles.module.scss';

export default function Switch({ className, title, ...props }) {
    return (
        <label className={`${className} ${styles.root}`}>
            <input type="checkbox" {...props} />
            {title}
        </label>
    )
}