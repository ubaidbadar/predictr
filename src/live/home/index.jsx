import FiltersModal from "../../components/filters-modal";
import UnAuth from "../../components/posts/un-auth";
import PrizeBanner from "../../components/prize-banner";
import ScoringSystemModal from "../../components/scoring-system";
import TopLeaderBoard from "../../components/top-leaderboard";
import useBoard from "../../hooks/useBoard";
import useQuery from "../../hooks/useQuery";
import Left from "./left";
import Main from "./main";

export default function Leaderboard() {
    const props = useBoard(), isMobile = useQuery();
    return (
        <>
            <ScoringSystemModal />
            <PrizeBanner {...props} />
            <div className="leaderboard">
                {!isMobile && <Left {...props} />}
                <div className="grid gap-inherit py-4">
                    {props.isLoggedIn ? (
                        <>
                            <Main {...props} />
                            <FiltersModal />
                        </>
                    ) : <UnAuth />}
                </div>
                {!isMobile && <TopLeaderBoard {...props} />}
            </div>
        </>
    )
}