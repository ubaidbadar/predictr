import { Link, useParams } from "react-router-dom";
import Select, { Item } from "../../ui/select";
import useGet from "../../hooks/useGet";
import Avatar from "../avatar";
import Arrow from "../../icons/arrow";
import ArrowBack from "../../icons/arrow-back";

function Main(props) {
    const { data, err, onParamsChange, params } = useGet('/fetch_leaderboard_standings', props.params)
    console.log(data)
    return (
        <div className={`card mt-4 sticky top-nav ${props.className}`}>
            <div className="flex-between pb-4 border-b-1 border-light-4">
                <h3>Leaderboard</h3>
                <Select onChange={onParamsChange} value="ALL" component={props => <button {...props} className="btn-text btn-select">{props.value}</button>}>
                    <Item value="ALL">All</Item>
                    <Item value="MONTH">Month</Item>
                    <Item value="WEEK">Week</Item>
                </Select>
            </div>
            <div className="flex flex-col gap-3 my-4">
                {data?.results.map((item, index) => (
                    <Link
                        key={item._id}
                        className="flex-center"
                        to={props.isLoggedIn ? `/user/${item.userId._id}` : { hash: '#login' }}
                    >
                        <span className="w-4">{index + 1}</span>
                        <Avatar {...item.userId} />
                        <span className="flex-1 ml-2">{item.userId.name}</span>
                        <span className="text-gray-0">{item.guess_accuracy.toFixed()}%</span>
                    </Link>
                ))}
            </div>
            <button className="btn-text">View all <ArrowBack className="rotate-180" /></button>
        </div>
    )
}

export default function TopLeaderBoard(props) {
    const limit = 10, id = useParams().id, params = { limit, show: id ? 'COMPETITION' : 'MONTH', leaderboard_scope: id ? 'COMPETITION' : 'GLOBAL', competition_id: id };
    return <Main {...props} params={params} />
}