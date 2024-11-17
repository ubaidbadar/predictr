import React from 'react';
import axios from '../config/axios';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import useAuth from '../contexts/auth';

dayjs.extend(localizedFormat);

const useNotifications = () => {
    const { socket, user } = useAuth();
    const [notifications, setNots] = React.useState(user.notifications)
    
    React.useEffect(() => {
        let newNotifications;
        const cb = async () => {
            if (!user.notifications) {
                newNotifications = (await axios.get('/fetch_notifications')).data.results;
                setNots([...newNotifications]);
            }
            try {
                socket.on('New_Notification', notification => {
                    notification.isSocket = true;
                    const date = dayjs(notification.createdOn).format('LL')
                    const group = newNotifications.find(noti => noti.date === date);
                    if (group) {
                        const notifs = group.notifs;
                        const existingNotificationIndex = notifs.findIndex(not => notification._id === not._id);
                        if (existingNotificationIndex > -1) notifs.splice(existingNotificationIndex, 1);
                        else notifs.unshift(notification);
                    }
                    else newNotifications.unshift({ date, notifs: [notification] });
                    setNots([...newNotifications])
                })
                return () => socket.off('New_Notification')
            } catch (e) {

            }

        }
        cb();
    }, [])

    return notifications
}


export default useNotifications;