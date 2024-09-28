import PrizeBanner from "../components/prize-banner";
import Stats from "../components/stats";
import useBoard from "../hooks/useBoard";
import useGet from "../hooks/useGet";

export default function Leaderboard() {
    const board = useBoard(), stats = useGet(`/fetch_user_stats/${board.user._id}`);
    return (
        <>
            <PrizeBanner />
            <div className="cont leaderboard">
                <Stats {...board} {...stats.data} />
            </div>
        </>
    )
}