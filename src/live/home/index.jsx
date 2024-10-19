import PrizeBanner from "../../components/prize-banner";
import useBoard from "../../hooks/useBoard";
import useQuery from "../../hooks/useQuery";
import Left from "./left";
import Main from "./main";

export default function Leaderboard() {
    const props = useBoard(), isMobile = useQuery();
    return (
        <>
            <PrizeBanner {...props} />
            <div className="cont leaderboard">
                {!isMobile && <Left {...props} />}
                <Main {...props} />
            </div>
        </>
    )
}