import {Link} from 'react-router-dom';
import Avatar from '../avatar';
import styles from './winner.module.scss';
// import Cup from '../../../icons-v2/cup'

const prizes = [500, 300, 200];

export default function Winner(props) {
    return (
        <Link className={`card-v2 px-0 ${styles.root}`} to="">
            <img src={`/cup-${props.index}.svg`} alt='' />
            <Avatar profile_img="/avatar_1.png" />
            <b className='-mb-[0.125rem]'>{props.name}</b>
            <p>{props.guess_accuracy.toFixed(2)}% Accuracy <br /> {props.total} Predictions</p>
            <strong className='text-green-1'>${prizes[props.index]}</strong>
        </Link>
    )
}