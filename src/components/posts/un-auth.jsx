import useGet from "../../hooks/useGet";
import Post from "../post";

const UnAuth = ({ api = "/fetch_global_feeds", ...props }) => {
    const { data, Loader } = useGet(`${api}?limit=5`);
    if (Loader) return <Loader className="mx-auto text-exs" />
    return (
        <>
            {data.posts.map(post => <Post {...post} {...props} key={post._id} />)}
            <a href="#login" className="btn-text">Load More</a>
        </>
    )
}

export default UnAuth;