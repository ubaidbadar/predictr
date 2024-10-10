import React from "react";
import styles from './movement.module.scss';
import moment from "dayjs";
import MinusCircle from "../../../icons/minus-circle";
import CheckCircle from "../../../icons/check-circle";
import CrossCircle from "../../../icons/cross-circle";


const Movement = ({ percentage = '0', accurate = true, guess_date, actual_change }) => {
    const guessDate = moment(guess_date), left = guessDate.diff(moment(), 'days');
    const d = left > 0 ? (
        <>
            <b className="text-gray-1 text-xxs mr-auto">LIVE TRACKING</b>
            <p className="text-gray-1">Result in {left}d</p>
        </>
    ) : '';
    if (actual_change === 0) return (
        <div className={`${styles.root} bg-light-2`}>
            <MinusCircle />
            No Movement
            {d}
        </div>
    )
    if(accurate) return (
        <div className={`${styles.root} ${d ? 'bg-green-2' : 'bg-green-0 text-surface'}`}>
            <CheckCircle className={d ? 'text-green-0' : ''} /> {percentage}% Accurate
            {d}
        </div>
    )
    return (
        <div className={`${styles.root} ${d ? 'bg-red-1' : 'bg-red-0 text-surface'}`} about={left}>
            <CrossCircle className={d ? "text-red-0" : ""} /> {percentage}% Inaccurate
            {d}
        </div>
    )
}

export default Movement;
