import styles from './styles.module.scss';

export default function BoxField({ className, type = "checkbox", label, ...props }) {
    return (
        <label className={`${styles.root} ${className}`}>
            <input type={type} className={styles.input} {...props} />
            {label}
        </label>
    )
}