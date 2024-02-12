// Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import Logo from "../../atoms/logo/Logo";
import FooterIcons from "../../molecules/footer/FooterIcon"; // Import the FooterIcons component

function Sidebar({ middleIcons }) {
    const handleLogOut = () => {
        console.log("User Logging Out");
        // Add your logout Logic Here
    };

    const handleSettings = () => {
        console.log("Settings Clicked");
        // Add your Settings logic here
    };

    return (
        <div className="sidebar">
            {/* Logo with Link to the home page */}
            <div className="logo-container">
                <Logo />
            </div>

            {/* Middle Icons with Links */}
            <div className="middle-icons">
                {middleIcons.map((icon, index) => (
                    <Link key={index} to={icon.route} className="icon-link">
                        <div className="icon-container" onClick={icon.onClick}>
                            {icon.icon}
                            <span className="middle-icon-text">{icon.text}</span>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Footer Icons */}
            <div className="footer-icons">
                <FooterIcons handleSettings={handleSettings} handleLogOut={handleLogOut} />
            </div>
        </div>
    );
}

export default Sidebar;
