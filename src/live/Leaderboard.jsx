import Avatar from "../components/avatar";
import PrizeBanner from "../components/prize-banner";
import Stats from "../components/stats";
import useBoard from "../hooks/useBoard";
import getProfile from "../utility/getProfile";

export default function Leaderboard() {
    const board = useBoard();
    return (
        <>
            <PrizeBanner />
            <div className="cont leaderboard">
                <Stats {...board} />
            </div>
        </>
    )
}