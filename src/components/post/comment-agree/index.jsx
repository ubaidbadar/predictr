import Buttons from "../agree/buttons";

export default function CommentButtons(props) {
    return (
        <div className="flex gap-6 text-gray-2">
            <Buttons />
            <label htmlFor={props.commentId || props._id} className='btn-text text-inherit'>Reply</label>
        </div>
    )
}