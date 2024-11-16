import useNotifications from "../../../hooks/useNotifications"

export default function Main() {
    const notifications = useNotifications();
    return (
        <>
            <div className="flex-between">
                <b className="text-sm">Notifications</b>
                <button className="text-xs btn-text">Read All</button>
            </div>
            <div>

            </div>
        </>
    )
}