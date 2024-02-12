import React from 'react';
import Interviews from '../../atoms/icons/interview';
import Recruitment from '../../atoms/icons/recruitment';
import Calender from '../../atoms/icons/calender';
import InterviewText from '../../atoms/text-icon/interview-text';
import CalendarText from '../../atoms/text-icon/calender-text';
import FeedbackText from '../../atoms/text-icon/feedback-text';
import './menu-top.css';
const MenuTop = () => {
    return (
            <div className="menu-top">
                <div className="menu-item">
                    <Interviews />
                    <InterviewText/>
                </div>
                <div className="menu-item">
                    <Recruitment />
                    <FeedbackText/>
                </div>
                <div className="menu-item">
                    <Calender />
                    <CalendarText/>
                </div>
            </div>
    );
};

export default MenuTop;
