import { Link } from "react-router-dom";
import useGet from "../../hooks/useGet";
import Avatar from "../avatar";
import TopModal from "./modal";
import DropDown from "./dropdown";

export default function TopLeaderboard(props) {
    const { data, err, Loader, onParamsChange, params } = useGet('/fetch_leaderboard_standings', { limit: 10, show: 'MONTH' })
    console.log(data)
    return (
        <div className={`card mt-4 sticky top-nav ${props.className}`}>
            <div className="flex-between pb-4 border-b-1 border-light-4">
                <h3>Leaderboard</h3>
                <DropDown onParamsChange={onParamsChange} />
            </div>
            {data && (
                <>
                    <div className="flex flex-col gap-3 my-4">
                        {data.results.map((item, index) => (
                            <Link
                                key={item._id}
                                className="flex-center"
                                to={props.isLoggedIn ? `/user/${item.userId._id}` : { hash: '#login' }}
                            >
                                <span className="w-6">{index + 1}</span>
                                <Avatar {...item.userId} />
                                <span className="flex-1 ml-2">{item.userId.name}</span>
                                <span className="text-gray-0">{item.guess_accuracy.toFixed()}%</span>
                            </Link>
                        ))}
                    </div>
                    <TopModal data={data} params={params} {...props} />
                </>
            )}
            {Loader && <Loader className="mx-auto my-4 text-exs" />}
        </div>
    )
}