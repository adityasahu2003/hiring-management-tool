import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import "./settings.css";

const Settings = () => {
  const settings = <FontAwesomeIcon icon={faGear} size="xl" />;
  return (
  <div className="settings">
    {settings}
    </div>);
}

export default Settings;