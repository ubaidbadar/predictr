import Post from "../post"
import getProps from "../post/getProps"
import Main from "./posts"


export default function Posts({ posts = [], ...props }) {
    return (
        <>
            {posts.map(post => <Post {...getProps(props)} {...post} key={post._id} />)}
            <Main {...props} />
        </>
    )
}