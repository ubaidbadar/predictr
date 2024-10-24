import Follow from "../../components/follow"
import User from "../../components/user"
import useGet from "../../hooks/useGet"

export default function FollowingsTab(props) {
    const { data, Loader } = useGet('/fetch_suggested_followers', { limit: 30, random: true })
    return (
        <div className="flex">
            <div className="mx-auto flex flex-col gap-3 text-center">
                My Feed shows predictions of the people you follow.
                <p className="py-2 font-semibold bg-primary-1 rounded-2">Follow at least 5 people to unlock.</p>
                {Loader && <Loader className="text-exs mt-1 mx-auto" />}
                {data?.results.map(user => (
                    <div className="flex-center gap-3" key={user.userId._id}>
                        <User {...user.userId} className="mr-auto" />
                        {user.guess_accuracy.toFixed(2)}%
                        <Follow {...props} userId={user.userId._id} />
                    </div>
                ))}
            </div>
        </div>
    )
}