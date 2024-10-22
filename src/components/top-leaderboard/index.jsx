import Down from "../../icons/down";
import Select, { Item } from "../../ui/select";

export default function TopLeaderBoard(props) {
    return (
        <div className={`card mt-4 sticky top-nav ${props.className}`}>
            <div className="flex-between pb-4 border-b border-light-4">
                <h3>Leaderboard</h3>
                <Select value="All" component={props => <button {...props} className="btn-text btn-select">{props.value}</button>}>
                    <Item value="All">All</Item>
                    <Item value="Month">Month</Item>
                    <Item value="Week">Week</Item>
                </Select>
            </div>
        </div>
    )
}