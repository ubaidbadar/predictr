import React from 'react';
import SelectV3, { Option } from '../../../ui-v2/SelectV3';
import CurveArrow from '../../../icons-v2/CurveArrowV2';
import Chain from '../../../icons-v2/ChainV2';
import FaceBook from '../../../icons-v2/FaceBookV2';
import Twitter from '../../../icons-v2/Twitter';
import copyHandler from '../../../utility/copyHandler';

const Share = props => {
    const onChange = e => {
        const value = e.target.value;
        const link = `https://stockalgos.com/leaderboard/post/${props.postId}`;
        if (value === 'Copy Link') copyHandler(link, 'Link has been has been copied');
        else {
            const shareLink = `https://www.${value}.com${value === 'facebook' ? '/sharer/sharer.php?u' : `${value === 'twitter' ? '/share' : ''}?url`}=${link}`;

            window.open(shareLink);
        }

    }
    return (
        <SelectV3 onChange={onChange} isNormal={true} className='text-accent-4'
            component={props => (
                <button {...props} className='btn btn-text small text-accent-4 me-auto'>
                    <CurveArrow /> <span className='d-none d-sm-block'>Share</span>
                </button>
            )}
        >
            <Option value='Copy Link'>
                <Chain /> Copy link
            </Option>
            <Option value='facebook'>
                <FaceBook /> Facebook
            </Option>
            <Option value='twitter'>
                <Twitter /> Twitter
            </Option>
        </SelectV3>
    )
}

export default Share;
