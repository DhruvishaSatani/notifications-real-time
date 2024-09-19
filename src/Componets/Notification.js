import React, { useEffect } from 'react';

const Notification = ({ title, body }) => {
    useEffect(() => {
        if (Notification.permission === 'granted') {
            new Notification(title, { body });
        }
    }, [title, body]);

    return null;
};

export default Notification;
