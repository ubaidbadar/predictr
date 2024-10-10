import React from "react";
import ArrowRightIcon from "../../../icons-v2/ArrowRightIcon";
import styles from './ArrowMovement.module.scss';

const ArrowMovement = ({ percentage = 0, movement = 'Up' }) => (
    <b className={`d-inline-flex align-items-center text-accent-${+percentage === 0 ? '' : movement === 'Up' ? '3' : '2'}`}>
        {+percentage !== 0 && <ArrowRightIcon className={`${styles.svg} rotate-${movement === 'Up' ? '270' : '90'}`} />}
        {percentage}%
    </b>
)

export default ArrowMovement;
