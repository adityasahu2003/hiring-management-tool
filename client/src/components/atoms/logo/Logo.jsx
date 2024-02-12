// Logo.jsx
import React from "react";
import { Link } from "react-router-dom"; // Import Link if you need routing
import logoImage from "../../../Assets/logo.png"; // Import your logo image
import './logo.css'

function Logo({ to = "/" }) {
    return (
        <Link to={to}>
            <img src={logoImage} alt="Logo" className="logo" />
        </Link>
    );
}

export default Logo;
