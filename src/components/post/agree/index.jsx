import { useState } from "react";
import Thumb from "../../../icons/thumb";

export default function Agree(props) {
    return (
        <>
            <button className="btn-text text-inherit">
                <Thumb /> Agree
            </button>
            <button className="btn-text text-inherit">
                <Thumb /> Disagree
            </button>
        </>
    );
}