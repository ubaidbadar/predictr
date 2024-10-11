import { useState } from "react";
import axios from "../../../config/axios";
import Thumb from "../../../icons/thumb";
import styles from './styles.module.scss';

export default function Agree(props) {
    // console.log(props)
    const [state, setState] = useState({
        agrees: props.agrees.length,
        disagrees: props.disagrees.length,
        done: props.is_agreed || props.is_disagreed
    });
    console.log(state)
    const onSubmit = (e) => {
        const is_agreed = e.currentTarget.name === 'agree';
        setState({
            done: true,
            agrees: state.agrees + (is_agreed ? 1 : 0),
            disagrees: state.disagrees + (is_agreed ? 0 : 1)
        });
        axios.post('/feed_post_agree_disagree', {
            postId: props._id,
            is_agreed,
        })
    }
    return (
        <>
            {state.done ? (
                <div className={styles.bars} style={{ '--agrees': state.agrees, '--disagrees': state.disagrees }}>
                    <span><Thumb /></span>
                    <span><Thumb /></span>
                </div>
            ) : (
                <>
                    <button name="agree" onClick={onSubmit} className="btn-text text-inherit">
                        <Thumb /> Agree
                    </button>
                    <button onClick={onSubmit} className="btn-text text-inherit">
                        <Thumb /> Disagree
                    </button>
                </>
            )}
        </>
    );
}