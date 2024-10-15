import { useState } from "react";
import axios from "../../../config/axios";
import Thumb from "../../../icons/thumb";
import styles from './styles.module.scss';
import Buttons from "./buttons";

export default function Agree(props) {
    const [{ agrees, disagrees, done }, setState] = useState({
        agrees: props.agrees.length,
        disagrees: props.disagrees.length,
        done: props.is_agreed || props.is_disagreed
    });

    const onSubmit = agreed => {
        setState({
            done: true,
            agrees: agrees + (agreed ? 1 : 0),
            disagrees: disagrees + (agreed ? 0 : 1)
        });
        axios.post('/feed_post_agree_disagree', {
            postId: props._id,
            agreed,
        })
    }

    const total = agrees + disagrees, getAgress = (agrees) => agrees ? `${agrees} / ${((agrees / total) * 100).toFixed()}%` : "";
    return done ? (
        <div className={styles.bars} style={{ '--agrees': agrees, '--disagrees': disagrees }}>
            <span><Thumb /><span>{getAgress(agrees)}</span></span>
            <span><Thumb /><span>{getAgress(disagrees)}</span></span>
        </div>
    ) : <Buttons onSubmit={onSubmit} />;
}