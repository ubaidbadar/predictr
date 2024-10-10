import React from "react";
import styles from './movement.module.scss';
import moment from "dayjs";
import MinusCircle from "../../../icons/minus-circle";
import CheckCircle from "../../../icons/check-circle";


const Movement = ({ percentage = '0', accurate = true, guess_date, actual_change }) => {
    const guessDate = moment(guess_date), left = guessDate.diff(moment(), 'days');
    const d = left > 0 ? <span className="ml-auto">Result in {left}d</span> : '';
    if (actual_change === 0) return (
        <div className={`${styles.root} bg-light-2`}>
            <MinusCircle />
            No Movement
            {d}
        </div>
    )
    if(accurate) return (
        <div className={`${styles.root} ${left > 0 ? 'bg-green-2' : 'bg-green-0 text-surface'}`}>
            <CheckCircle /> {percentage}% Accurate
            {d}
        </div>
    )
    return (
        <div className={`${styles.root} ${accurate ? 'bg-green-0' : 'bg-red-0'}`} about={left}>
            {accurate ? <>{percentage}% Accurate</> : 'Inaccurate'}
        </div>
    )
}

export default Movement;
