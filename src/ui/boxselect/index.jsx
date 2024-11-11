import CheckDefault from '../check-default';
import styles from './styles.module.scss';

export default function BoxSelect(props) {
    return <CheckDefault {...props} className={`${styles.root} ${props.className}`} />
}