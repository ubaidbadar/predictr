import useGet from "../../hooks/useGet";
import withBoard from "../../hoc/withBoard";
import Post from "../../components/post";
import Stats from "../../components/stats";
import Follow from "../../components/follow";
import getProfile from "../../lib/getProfile";

function PostPage(props) {
    const location = window.location;
    const postId = location.pathname.replace("/post", "");
    const api = postId ? `/feed_post${postId}` : `/feed_post_by_comment/${location.search.split('commentId=')[1]}`;
    const { data, err, Loader } = useGet(api);
    if (Loader) return <Loader className='absolute-middle' />
    if (err) return <h3 className='absolute-middle text-2xl text-red-0 text-center text-accent-2'>{err}</h3>
    if (!data) return null;
    const isUser = props.userId === props.user?._id, user = getProfile(data);
    return (
        <>
            <div className="leaderboard mt-4">
                <div></div>
                <Post {...data.post} {...props} userId={data} is_following={data.is_following} />
                <div className='-order-1 lg:order-initial flex flex-col gap-inherit sticky'>
                    <Stats {...data}
                        data={data}
                        isUser={isUser}
                        isLoggedIn={props.isLoggedIn}
                        user={{
                            ...user,
                            followers: data.followers,
                            followings: data.followings,
                            is_following: data.is_following,
                            position: data.position,
                        }}
                    >
                        <Follow {...props} className="btn-primary w-full mt-4" userId={user._id} is_following={data.is_following} />
                    </Stats>
                </div>
            </div>
        </>
    )
}

export default withBoard(PostPage)