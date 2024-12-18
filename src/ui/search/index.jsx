import Magnifier from '../../icons/magnifier'
import Pluse from '../../icons/plus'
import styles from './styles.module.scss'

export default function Search({ className, children, onClear, ...props }) {
    return (
        <label className={`${styles.root} flex-center ${className}`}>
            <input type="text" {...props} />
            {props.value && onClear ? <button onClick={onClear} type='button' className='btn-icon no-space rounded-6'><Pluse className="rotate-45" /></button> : !children && <Magnifier className="text-light-3" />}
            {children}
        </label>
    )
}