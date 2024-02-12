import React from "react";
import Settings from '../../atoms/icons/settings';
import Logout from '../../atoms/icons/logout';
import Settingstext from '../../atoms/text-icon/settings-text';
import Logouttext from '../../atoms/text-icon/logout-text';
import './menu-bottom.css';

const MenuBottom = () => {
    return (
        <div className="menu-bottom">
            <div className="menu-item">
                <Settings />
                <Settingstext/>
            </div>
            <div className="menu-item">
                <Logout />
                <Logouttext/>
            </div>
        </div>
    );
}

export default MenuBottom;