import { useState } from "react";
import axios from "../../../config/axios";
import Thumb from "../../../icons/thumb";
import styles from './styles.module.scss';

export default function Agree(props) {
    const [{ agrees, disagrees, done }, setState] = useState({
        agrees: props.agrees.length,
        disagrees: props.disagrees.length,
        done: props.is_agreed || props.is_disagreed
    });

    const onSubmit = (e) => {
        const is_agreed = e.currentTarget.name === 'agree';
        setState({
            done: true,
            agrees: agrees + (is_agreed ? 1 : 0),
            disagrees: disagrees + (is_agreed ? 0 : 1)
        });
        axios.post('/feed_post_agree_disagree', {
            postId: props._id,
            is_agreed,
        })
    }
    const total = agrees + disagrees;
    const getAgress = (agrees) => agrees ? `${agrees} / ${((agrees / total) * 100).toFixed()}%` : "";
    return (
        <>
            {done ? (
                <div className={styles.bars} style={{ '--agrees': agrees, '--disagrees': disagrees }}>
                    <span><Thumb /><span>{getAgress(agrees)}</span></span>
                    <span><Thumb /><span>{getAgress(disagrees)}</span></span>
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