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
                <div>
                    {board.isLoggedIn ? <Stats {...board} {...stats.data} /> : (
                        <div className="card">
                            <h3>Join Predictr</h3>
                            <p className="text-gray-0 mt-1 mb-6">A community for all the day-traders to predict stocks and measure accuracy over the time.</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}