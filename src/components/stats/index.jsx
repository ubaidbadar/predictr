import FollowModal from "../../dialogs/follwers";
import getProfile from "../../utility/getProfile";
import Avatar from "../avatar";
import Predictor from "./predictor-card";
import Progress from './progress';

export default function Stats({ user, isLoggedIn }) {
    return (
        <>
            <div className="card">
                <div className="flex-center pb-4 mb-4 border-b border-light-4 gap-3">
                    <Avatar className="text-5xl" {...getProfile(user)} />
                    <span className="flex-center gap-x-3 flex-wrap text-gray-0">
                        <b className="w-full text-dark-0">{user.name}</b>
                        <FollowModal
                            userId={user._id}
                            title="Followers"
                            isLoggedIn={isLoggedIn}
                            component={tools => (
                                <button onClick={tools.open} className="btn-text text-xs">
                                    <b>{user.stats.followers}</b>followers
                                </button>
                            )}
                        />
                        <FollowModal
                            title="Following"
                            userId={user._id}
                            isLoggedIn={isLoggedIn}
                            component={tools => (
                                <button onClick={tools.open} className="btn-text text-xs"><b>{user.stats.followings}</b>following</button>
                            )}
                        />
                    </span>
                </div>
                <Progress {...user.stats} />
            </div>
            <Predictor {...user.stats.premium} />
        </>
    )
}