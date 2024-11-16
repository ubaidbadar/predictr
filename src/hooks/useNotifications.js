import React from 'react';
import { useApp } from '../App';
import moment from 'moment/moment';
import axios from 'axios';

const useNotifications = () => {
    const { socket, isLoggedIn, user } = useApp();
    const [notifications, setNots] = React.useState(user.notifications ? [...user.notifications] : [])
    let updateNotifications = React.useMemo(() => [...notifications], [])

    React.useEffect(async () => {
        if (!isLoggedIn) return;
        if (!user.notifications) {
            const notifications = (await axios.get('/fetch_notifications')).data.results;
            updateNotifications = notifications;
            setNotifications([...updateNotifications]);
        }
        try {
            socket.on('New_Notification', notification => {
                notification.isSocket = true;
                const date = moment(notification.createdOn).format('LL')
                const group = updateNotifications.find(noti => noti.date === date);
                if (group) {
                    const notifs = group.notifs;
                    const existingNotificationIndex = notifs.findIndex(not => notification._id === not._id);
                    if (existingNotificationIndex > -1) notifs.splice(existingNotificationIndex, 1);
                    else notifs.unshift(notification);
                }
                else updateNotifications.unshift({ date, notifs: [notification] });
                setNotifications([...updateNotifications])
            })
            return () => socket.off('New_Notification')
        } catch (e) {

        }

    }, [isLoggedIn])

    const setNotifications = notifs => {
        updateNotifications = notifs;
        setNots([...updateNotifications]);
    }

    return { notifications, setNotifications }
}


export default useNotifications;