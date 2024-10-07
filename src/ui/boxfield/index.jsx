import styles from './styles.module.scss';

export default function BoxField({ title, className, type = "checkbox", ...props }) {
    return (
        <label className={`${styles.root} ${className}`}>
            <input {...props} type='checkbox' className='hidden' />
            {title}
        </label>
    )
}