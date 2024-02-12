import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import './notify.css';

const NotificationBell = () => {
    const bellIcon = <FontAwesomeIcon icon={faBell} size="xl" />
    return (
        <div className="notify">
            {bellIcon}
        </div>
    );
};

export default NotificationBell;
