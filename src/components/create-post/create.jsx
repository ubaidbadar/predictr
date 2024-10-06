import { useState } from "react"
import Pluse from "../../icons/plus";
import MakePrediction from "./make-prediction";

const titles = ['Make a prediction', 'Select a stock', 'Date']

export default function Create(props) {
    const [page, setPage] = useState(0), pages = [MakePrediction];
    return (
        <>
            <div className="Modal-Header">
                <h3>{titles[0]}</h3>
                <button className="btn-close">
                    <Pluse />
                </button>
            </div>
            {pages[page]({ setPage })}
        </>
    )
}