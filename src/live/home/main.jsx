import CreatePost from "../../components/create-post";
import Posts from "../../components/posts";

export default function Main(props) {
    return (
        <div className="grid gap-inherit">
            <CreatePost {...props} />
            <Posts {...props} />
        </div>
    )
}