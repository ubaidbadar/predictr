import useGet from "../../hooks/useGet"
import Post from "../post"
import getProps from "../post/getProps"
import Main from "./posts"


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

export default function Posts({ posts = [], ...props }) {
    const nProps = getProps(props)
    if (!props.isLoggedIn) return <UnAuth {...nProps} />
    return (
        <>
            {posts.map(post => <Post {...nProps} {...post} key={post._id} />)}
            <Main {...nProps} />
        </>
    )
}