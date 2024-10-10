import React from "react";
import Arrow from "../../../icons/arrow";

const ArrowMovement = ({ percentage = 0, movement = 'Up' }) => (
    <b className={`d-inline-flex align-items-center text-accent-${+percentage === 0 ? '' : movement === 'Up' ? '3' : '2'}`}>
        {+percentage !== 0 && <Arrow className={`h-[1em] rotate-${movement === 'Up' ? '270' : '90'}`} />}
        {percentage}%
    </b>
)

export default ArrowMovement;
