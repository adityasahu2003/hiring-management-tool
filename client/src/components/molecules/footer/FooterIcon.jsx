// FooterIcons.jsx
import React from "react";
import { FiLogOut } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import "./footericons.css"

function FooterIcons({ handleSettings, handleLogOut }) {
  return (
    <>
      <div className="footer-icon-container">
        <IoSettingsOutline
          id="Settings"
          onClick={handleSettings}
          style={{ fontSize: "1.4rem" }}
        />
        <span className="footer-icon-text">Settings</span>
      </div>
      <div className="footer-icon-container">
        <FiLogOut
          id="logout"
          onClick={handleLogOut}
          style={{ fontSize: "1.4rem",color:"red" }}
        />
        <span className="footer-icon-text" style={{ color:"red" }}>Logout</span>
      </div>
    </>
  );
}

export default FooterIcons;
