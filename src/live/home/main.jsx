import { useState } from "react";
import CreatePost from "../../components/create-post";
import Posts from "../../components/posts";

export default function Main(props) {
    const [posts, setPost] = useState([])
    return (
        <div className="grid gap-inherit py-4">
            <CreatePost {...props} create={res => setPost([res.data, ...posts])} />
            <Posts posts={posts} {...props} />
        </div>
    )
}