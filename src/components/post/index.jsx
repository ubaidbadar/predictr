import getProfile from "../../../old/utility/getProfile";
import Follow from "../follow";
import User from "../user";
import dayjs from "dayjs";
import plugin from "dayjs/plugin/relativeTime";
dayjs.extend(plugin)

export default function Post({isFollow = true, ...props}) {
    const postedOn = dayjs(props.createdOn)
    return (
        <div className="border border-light-0 bg-light-1 rounded-4">
            <div className="p-4 bg-surface shadow-1 rounded-4">
                <div className="flex-between">
                    <User {...getProfile(props.userId)}
                        subtitle={
                            postedOn.isSame(dayjs(), "day") ? postedOn.fromNow() : postedOn.format('MMM DD, YYYY, hh:mm A')
                        }
                    />
                    {isFollow && <Follow userId={props.userId._id} is_following={props.is_following} />}
                </div>

            </div>
        </div>
    )
}