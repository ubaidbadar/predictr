import getProfile from "../utility/getProfile";
import Avatar from "./avatar";

export default function Stats(props) {
    return (
        <div className="card">
            <div className="flex">
                <Avatar className="text-5xl" {...getProfile(props)} />
                <b>Trevor Bergeron</b>
            </div>
        </div>
    )
}