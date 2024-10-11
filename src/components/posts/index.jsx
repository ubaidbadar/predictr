import useScrollFetch from "../../hooks/useScrollFetch";
import Spinner from "../../ui/spinner";
import Post from "../post";

const Main = ({api = '/fetch_global_feeds', posts = [], ...props}) => {
    const state = useScrollFetch(api, posts)
    return (
        <>
            {state.posts.map(post => <Post {...props} {...post} key={post._id} />)}
            {state.exists && <Spinner className="mx-auto text-exs" />}
        </>
    )
}

export default Main;