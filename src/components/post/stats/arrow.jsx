import React from "react";
import Arrow from "../../../icons/arrow";

const ArrowMovement = ({ percentage = 0, movement = 'Up' }) => (
    <b className={`flex-center gap-1 ${+percentage === 0 ? '' : movement === 'Up' ? 'text-red-0' : 'text-green-3'}`}>
        {percentage}%
        {+percentage !== 0 && <Arrow className={`min-h-[1em] rotate-${movement === 'Up' ? '270' : '90'}`} />}
    </b>
)

export default ArrowMovement;