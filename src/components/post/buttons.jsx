import Follow from "../follow";

export default function Buttons({ isFollow = true, is_following, userId }) {
    return (
        <div className="flex">
            {isFollow && <Follow userId={userId._id} is_following={is_following} />}
        </div>
    )
}