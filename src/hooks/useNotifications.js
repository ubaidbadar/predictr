import React from 'react';
import axios from '../config/axios';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import useAuth from '../contexts/auth';

dayjs.extend(localizedFormat);

const useNotifications = () => {
    const { socket, user } = useAuth();
    const [notifications, setNots] = React.useState(user.notifications ? [...user.notifications] : [])
    let updateNotifications = React.useMemo(() => [...notifications], [])

    React.useEffect(async () => {
        if (!user.notifications) {
            const notifications = (await axios.get('/fetch_notifications')).data.results;
            updateNotifications = notifications;
            setNotifications([...updateNotifications]);
        }
        try {
            socket.on('New_Notification', notification => {
                notification.isSocket = true;
                const date = dayjs(notification.createdOn).format('LL')
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

    }, [])

    const setNotifications = notifs => {
        updateNotifications = notifs;
        setNots([...updateNotifications]);
    }

    return { notifications, setNotifications }
}


export default useNotifications;