import CreatePost from "../../components/post-modal";

export default function Main(props) {
    return (
        <div className="grid gap-inherit">
            <CreatePost {...props} />
        </div>
    )
}