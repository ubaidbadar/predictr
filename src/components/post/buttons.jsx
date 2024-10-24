import Follow from "../follow";

export default function Buttons({ isFollow = true, user, userId, isLoggedIn }) {
    return (
        <div className="flex">
            {isFollow && <Follow user={user} isLoggedIn={isLoggedIn} userId={userId._id} />}
        </div>
    )
}