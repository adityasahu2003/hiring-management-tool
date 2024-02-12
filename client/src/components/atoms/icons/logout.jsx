import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import './logout.css';

const Logout = () => {
    const logout = <FontAwesomeIcon icon={faArrowRightFromBracket} size="xl" />;
    return (
        <div className='logout'>
            {logout}
        </div>
    );
};

export default Logout;
