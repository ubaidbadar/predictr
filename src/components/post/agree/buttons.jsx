import axios from "axios";
import Thumb from "../../../icons/thumb";

export default function Buttons(props) {
    const click = (e) => {
        const is_agreed = e.currentTarget.name === 'agree';
        axios.post('/feed_post_agree_disagree', {
            postId: props._id,
            is_agreed,
            is_disagreed: !is_agreed,
            
        })
    }
    return (
        <>
            <button name="agree" onClick={click} className="btn-text text-inherit">
                <Thumb /> Agree
            </button>
            <button onClick={click} className="btn-text text-inherit">
                <Thumb /> Disagree
            </button>
        </>
    )
}