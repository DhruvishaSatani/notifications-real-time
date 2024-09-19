import { useEffect, useState } from 'react';
import { requestForToken, onMessageListener } from '../Services/firebase';

const usePushNotifications = () => {
    const [notification, setNotification] = useState(null);

    useEffect(() => {
        const initializeNotifications = async () => {
            await requestForToken();

            onMessageListener().then((payload) => {
                setNotification({
                    title: payload.notification.title,
                    body: payload.notification.body
                });
            });
        };

        initializeNotifications();
    }, []);

    return notification;
};

export default usePushNotifications;
