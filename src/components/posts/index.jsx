import Main from "./posts"


export default function Posts({ posts = [], ...props }) {
    return (
        <>
            <Main {...props} />
        </>
    )
}