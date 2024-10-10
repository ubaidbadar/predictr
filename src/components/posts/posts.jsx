import useScrollFetch from "../../hooks/useScrollFetch";
import Spinner from "../../ui/spinner";
import Post from "../post";
import getProps from "../post/getProps";

const Main = ({api = '/fetch_global_feeds', ...props}) => {
    const { exists, posts, initial, ...state } = useScrollFetch(api)
    return (
        <>
            {posts.map(post => <Post {...getProps(props)} {...post} key={post._id} />)}
            {exists && <Spinner className="mx-auto text-exs" />}
        </>
    )
}

export default Main;