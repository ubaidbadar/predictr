import CreatePost from "../../components/create-post";

export default function Main(props) {
    return (
        <div className="grid gap-inherit">
            <CreatePost {...props} />
        </div>
    )
}