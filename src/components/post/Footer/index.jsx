import React, { useMemo } from 'react';
import PostComments from '../PostComments';
import useLike from '../../../hooks/useLike';
import useAgreeDisagree from '../../../hooks/useAgreeDisagree';
import Heart from '../../../icons-v2/Heart';
import AgreementIcon from '../../../icons-v2/AgreementIcon';
import DisagreementIcon from '../../../icons-v2/DisagreementIcon';
import Share from '../Share';
import Users from '../Users';
import AgreeDisagreeGraph from '../AgreeDisagreeGraph';

function isCurrentTimeWithin40Percent(createdOn, guessDate) {
    const createdOnDate = new Date(createdOn);
    const guessDateObj = new Date(guessDate);
    const currentDate = new Date();

    const totalTimeSpan = guessDateObj - createdOnDate;
    const elapsedTime = currentDate - createdOnDate;

    return elapsedTime <= (totalTimeSpan * 0.4);
}

const Footer = props => {
    const likeInfo = useLike(props);
    const agreeDisagreeInfo = useAgreeDisagree(props);
    const isWithin40Percent = useMemo(() => isCurrentTimeWithin40Percent(props.createdOn, props.guess_date), [props.createdOn, props.guess_date]);
    return (
        <>
            <div className='d-flex gap-sm-4 gap-3'>
                <button
                    onClick={likeInfo.likeHandler}
                    className={`btn btn-text text-accent-4 small`}
                >
                    <Heart
                        className={`text-accent-${likeInfo.isLiked ? 2 : 4}`}
                        fill={likeInfo.isLiked ? 'currentColor' : 'none'}
                    />
                    <span className='d-none d-sm-hidden'>Like</span>
                </button>
                {(props.allowed && (agreeDisagreeInfo.is_agreed || agreeDisagreeInfo.is_disagreed || !isWithin40Percent)) ? (
                    <>
                        {(agreeDisagreeInfo.total_agrees > 0 || agreeDisagreeInfo.total_disagrees > 0) &&
                            <AgreeDisagreeGraph
                                isAgreed={agreeDisagreeInfo.is_agreed}
                                agreeCount={agreeDisagreeInfo.total_agrees}
                                disagreeCount={agreeDisagreeInfo.total_disagrees}
                            />
                        }
                    </>

                )
                    : (
                        <>
                            {isWithin40Percent && <>
                                <button
                                    onClick={() => agreeDisagreeInfo.agreeDisagreeHandler('agree')}
                                    className={`btn btn-text text-accent-4 small me-auto`}
                                >
                                    <AgreementIcon
                                        className={`text-accent-${agreeDisagreeInfo.isLiked ? 2 : 4}`}
                                        fill={agreeDisagreeInfo.isLiked ? 'currentColor' : 'none'}
                                    />
                                    Agree
                                </button>
                                <button
                                    onClick={() => agreeDisagreeInfo.agreeDisagreeHandler('disagree')}
                                    className={`btn btn-text text-accent-4 small`}
                                >
                                    <DisagreementIcon
                                        className={`text-accent-${agreeDisagreeInfo.isLiked ? 2 : 4}`}
                                        fill={agreeDisagreeInfo.isLiked ? 'currentColor' : 'none'}
                                    />
                                    Disagree
                                </button>
                            </>
                            }
                        </>
                    )}
                {/* <label htmlFor={props.postId} className='btn btn-text small text-accent-4' onClick={props.checkLogin}>
                    <Message /> Comment
                </label> */}
                <Share {...props} />
            </div>
            <div className='d-flex flex-wrap'>
                {props.likes && props.likes.length > 0 && <Users {...props} />}
                <PostComments {...props} />
            </div>
        </>
    )
}

export default Footer;