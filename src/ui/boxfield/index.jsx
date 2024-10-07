import styles from './styles.module.scss';

export default function BoxField({ className, type = "checkbox", title, label, ...props }) {
    return (
        <label className={`${styles.root} ${className}`} title={title}>
            <input type={type} className={styles.input} {...props} />
            {label}
        </label>
    )
}