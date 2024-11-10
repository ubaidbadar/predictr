import styles from './styles.module.scss';

export default function TextField({ title, left, right, ...props }) {
    return (
        <label title={title} className={styles.root}>
            <span className={styles.main}>
                {left}
                <input {...props} className={styles.field} />
                {right}
            </span>
        </label>
    )
}