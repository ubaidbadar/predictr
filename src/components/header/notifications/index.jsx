import { Fragment } from "react";
import DropDown from '../../../hoc/DropDown';
import Bell from '../../../icons/bell';
import useNotifications from "../../../hooks/useNotifications"
import dateFromNow from "../../../lib/dateFromNow";
import Spinner from "../../../ui/spinner";


export default function Notifications() {
    const notifications = useNotifications();
    return (
        <>
            <DropDown
                component={props => (
                    <button {...props} className='text-gray-0 btn-icon no-space'>
                        <Bell />
                    </button>
                )}
                className="p-4 animation-opacity shadow-3 mt-1 absolute rounded-4 z-3 w-80 bg-surface"
            >
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
            </DropDown>
        </>
    )
}