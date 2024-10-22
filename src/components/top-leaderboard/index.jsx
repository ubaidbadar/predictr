import DropDown from "../../ui/drop-down";
import Select, { Item } from "../../ui/select";

export default function TopLeaderBoard(props) {
    return (
        <div className={`card mt-4 sticky top-nav ${props.className}`}>
            <div className="flex-between pb-4 border-b border-light-4">
                <h3>Leaderboard</h3>
                <Select component={props => <button {...props}>All</button>}>
                    <Item value="All">All</Item>
                </Select>
            </div>
        </div>
    )
}