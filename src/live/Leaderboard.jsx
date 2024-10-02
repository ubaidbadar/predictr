import Google from "../components/google";
import PrizeBanner from "../components/prize-banner";
import Stats from "../components/stats";
import useBoard from "../hooks/useBoard";

export default function Leaderboard() {
    const board = useBoard();
    return (
        <>
            <PrizeBanner />
            <div className="cont leaderboard">
                <div className="grid gap-inherit">
                    {board.isLoggedIn ? (
                        <>
                            <Stats {...board} />
                            <button className="btn-primary">Predict</button>
                        </>
                    ) : (
                        <div className="card">
                            <h3>Join Predictr</h3>
                            <p className="text-gray-0 mt-1 mb-6">A community for all the day-traders to predict stocks and measure accuracy over the time.</p>
                            <Google />
                            <a href="#login" className="btn-ghosted w-full mt-1">Join with Email</a>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}