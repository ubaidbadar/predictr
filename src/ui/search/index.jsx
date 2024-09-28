import Magnifier from '../../icons/magnifier'
import styles from './styles.module.scss'

export default function Search({ className, ...props }) {
    return (
        <label className={`${styles.root} flex-center ${className}`}>
            <input type="text" {...props} />
            <Magnifier className="text-light-3" />
        </label>
    )
}

// cont-p gap-8 backdrop-blur-lg bg-white bg-opacity-80 nav-height border-light-0 border-b flex-center