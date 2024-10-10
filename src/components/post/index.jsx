import getProfile from "../../../old/utility/getProfile";
import User from "../user";
import dayjs from "dayjs";
import plugin from "dayjs/plugin/relativeTime";
import Buttons from "./buttons";
dayjs.extend(plugin)

export default function Post(props) {
    const postedOn = dayjs(props.createdOn), isCurrent = props.userId._id === props.user._id;
    return (
        <div className="border border-light-0 bg-light-1 rounded-4">
            <div className="p-4 bg-surface shadow-1 rounded-4">
                <div className="flex-between">
                    <User {...getProfile(props.userId)}
                        subtitle={
                            postedOn.isSame(dayjs(), "day") ? postedOn.fromNow() : postedOn.format('MMM DD, YYYY, hh:mm A')
                        }
                    />
                    {!isCurrent && <Buttons {...props} />}
                </div>
            </div>
        </div>
    )
}