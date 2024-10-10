import React from 'react';
import useLike from '../../../hooks/useLike';
import Heart from '../../../icons-v2/Heart';

const Like = props => {
    const data = useLike(props);
    return (
        <div className={`d-flex text-accent-4 ns-gap align-items-center small${props.commentId ? 'er' : ''}`}>
            <button
                className={`btn btn-icon ms-0 fs-inherit text-accent-${data.isLiked ? 2 : 4}`}
                onClick={data.likeHandler}
            >
                <Heart fill={data.isLiked ? 'currentColor' : 'none'} />
            </button>
            {data.total}
        </div>
    )
}

export default Like; 