import Follow from "../follow";

export default function Buttons({ isFollow = true, is_following, userId, isLoggedIn }) {
    return (
        <div className="flex">
            {isFollow && <Follow isLoggedIn={isLoggedIn} userId={userId._id} is_following={is_following} />}
        </div>
    )
}