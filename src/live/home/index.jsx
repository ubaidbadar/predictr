import PrizeBanner from "../../components/prize-banner";
import useBoard from "../../hooks/useBoard";
import Left from "./left";
import Main from "./main";

export default function Leaderboard() {
    const props = useBoard();
    return (
        <>
            <PrizeBanner {...props} />
            <div className="cont leaderboard">
                <Left {...props} />
                <Main {...props} />
            </div>
        </>
    )
}