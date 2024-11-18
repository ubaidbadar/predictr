import React from 'react';
import useGet from '../../hooks/useGet';
import SiteTitle from '../../components/site_title';
import Post from '../../components-v2/Post';
import withLeaderBoard from '../../components-v2/LeaderBoardComponents/withLeaderBoard';
import Back from '../../components-v2/LeaderBoardComponents/Back';
import UserProgressV4 from '../../components-v2/LeaderBoardComponents/UserProgress';
import SubscribeModal from '../../components-v2/LeaderBoardComponents/Subscribe';
import UnSubscribeModal from '../../components-v2/LeaderBoardComponents/UnSubscribeModal';


const LeaderboardPostPage = props => {
    const postId = props.match.params.postId;
    const api = postId ? `/feed_post/${postId}` : `/feed_post_by_comment/${props.location.search.split('commentId=')[1]}`
    const { data, err, Loader } = useGet(api);
    if (Loader) return <Loader toMiddle />
    if (err) return <h3 className='translate-middle position-absolute text-center text-accent-2'>{err}</h3>
    const post = data.post, userId = { name: data.name, profile_img: data.profile_img, _id: data._id };
    post.userId = userId
    if(post) {
        setTimeout(() => {
            console.clear();
            setTimeout(() => {
                // console.log(data)
            }, 100)
        }, 2000)
    }
    return (
        <>

            {props.isLoggedIn && (
                <>
                    <SubscribeModal {...props} posts={[post]} />
                    <UnSubscribeModal {...props} posts={[post]} />
                </>
            )}
            <SiteTitle title={`${data.name} made a prediction on ${post.stock_symbol} on StockAlgos - View details here:`}
                meta_description={post.description}
            />
            <Back className='d-none d-lg-flex justify-content-end' />
            <Post {...post} is_following={data.is_following} {...props} />
            <UserProgressV4
                user={userId}
                data={data}
                is_following={data.is_following}
                isLoggedIn={props.isLoggedIn}
                isCurrentUser={props.isLoggedIn && props.user._id === data._id}
                {...post}
            />
        </>
    )
}


export default withLeaderBoard(LeaderboardPostPage);
