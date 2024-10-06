import styles from './styles.module.scss';

export default function BoxField({title, className, ...props}) {
    return (
        <label className={`${styles.root} ${className}`}>
            <input {...props} />
            {title}
        </label>
    )
}