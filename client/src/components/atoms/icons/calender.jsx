import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import './calender.css';

const Calender = () => {    
    const calender = <FontAwesomeIcon icon={faCalendar} size="xl" />;
    return (
        <div className='calender'>
            {calender}
        </div>
    );
}

export default Calender;