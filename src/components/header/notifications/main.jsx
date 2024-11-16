import { Fragment } from "react";
import useNotifications from "../../../hooks/useNotifications"
import dateFromNow from "../../../lib/dateFromNow";
import Spinner from "../../../ui/spinner";

export default function Main() {
    const notifications = useNotifications();
    return (
        <>
            <div className="flex-between text-sm">
                <b>Notifications</b>
                <button className="text-xs btn-text">Read All</button>
            </div>
            <div className="h-48 overflow-auto text-sm flex-col">
                {notifications ? notifications.map(group => (
                    <Fragment key={group.date}>
                        <b className="text-gray-1 font-normal">{dateFromNow(group.date)}</b>
                    </Fragment>
                )) : <Spinner className="m-auto" />}
            </div>
        </>
    )
}