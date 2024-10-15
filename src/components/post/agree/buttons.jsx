import axios from "../../../config/axios";
import Thumb from "../../../icons/thumb";

export default function Buttons(props) {
    const submit = (e) => props.onSubmit(e.currentTarget.name === 'agree');
    return (
        <>
            <button name="agree" onClick={submit} className="btn-text text-inherit">
                <Thumb /> Agree
            </button>
            <button onClick={submit} className="btn-text text-inherit">
                <Thumb /> Disagree
            </button>
        </>
    )
}