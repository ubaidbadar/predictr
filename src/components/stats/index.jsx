import FollowModal from "../../dialogs/follwers";
import getProfile from "../../utility/getProfile";
import Avatar from "../avatar";

export default function Stats(props) {
    return (
        <div className="card">
            <div className="flex-center pb-4 mb-4 border-b border-light-4 gap-3">
                <Avatar className="text-5xl" {...getProfile(props)} />
                <span className="flex-center gap-x-3 flex-wrap text-gray-0">
                    <b className="w-full text-normal">{props.user.name}</b>
                    <FollowModal
                        userId={props.user._id}
                        title="Followers"
                        isLoggedIn={props.isLoggedIn}
                        component={tools => (
                            <button onClick={tools.open} className="btn-text text-xs">
                                <b>{props.followers}</b>followers
                            </button>
                        )}
                    />
                    <FollowModal
                        title="Following"
                        userId={props.user._id} isLoggedIn={props.isLoggedIn}
                        component={tools => (
                            <button onClick={tools.open} className="btn-text text-xs"><b>{props.followings}</b>following</button>
                        )}
                     />
                </span>
            </div>
        </div>
    )
}