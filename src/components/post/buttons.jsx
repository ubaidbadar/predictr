import Follow from "../follow";

export default function Buttons({ isFollow = true, ...props }) {
    return (
        <div className="flex">
            {isFollow && <Follow {...props} />}
        </div>
    )
}