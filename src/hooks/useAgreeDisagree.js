import { useState } from 'react';
import axios from 'axios';
import axiosErrorHandler from '../utility/axiosErrorHandler';

const useAgreeDisagree = ({ commentId, is_agreed, is_disagreed, total_agrees, total_disagrees, postId, checkLogin }) => {
    const [status, setStatus] = useState({ 
        is_agreed: is_agreed, 
        is_disagreed: is_disagreed,
        total_agrees: +total_agrees || 0,
        total_disagrees: +total_disagrees || 0
    });



    const agreeDisagreeHandler = (actionType) => {

        if (!checkLogin()) return;

        // Determine the new state based on the actionType
        const isAgreeAction = actionType === 'agree';
        
        const newTotalAgrees = total_agrees + (isAgreeAction ? 1 : 0);
        const newTotalDisagrees = total_disagrees + (!isAgreeAction ? 1 : 0);



        const oldState = { ...status };
        setStatus({
            is_agreed: isAgreeAction,
            is_disagreed: !isAgreeAction,
            total_agrees: newTotalAgrees,
            total_disagrees: newTotalDisagrees
        });

        const data = { postId, is_agreed: isAgreeAction };
        if (commentId) data.commentId = commentId;

        axios.post('/feed_post_agree_disagree', data)
            .catch(err => {
                axiosErrorHandler(err);
                setStatus(oldState);
            });
    };

    return { ...status, agreeDisagreeHandler };
}

export default useAgreeDisagree;