import UnAuth from "../../components/posts/un-auth";
import PrizeBanner from "../../components/prize-banner";
import TopLeaderBoard from "../../components/top-leaderboard";
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
                <div className="grid gap-inherit py-4">
                    {props.isLoggedIn ? <Main {...props} /> : <UnAuth />}
                </div>
                <TopLeaderBoard {...props} />
            </div>
        </>
    )
}