import useScrollFetch from "../../hooks/useScrollFetch";
import Spinner from "../../ui/spinner";
import Post from "../post";

const Main = ({api = '/fetch_global_feeds'}) => {
    const { exists, posts, initial, ...state } = useScrollFetch(api)
    
    if(initial) return
    return (
        <>
            {posts.map(post => <Post {...post} key={post._id} />)}
            {exists && <Spinner className="mx-auto text-exs" />}
        </>
    )
}

export default Main;