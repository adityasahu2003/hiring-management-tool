import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileContract } from "@fortawesome/free-solid-svg-icons";
import "./recruitment.css";

const Recruitment = () => {
  const recruitment = <FontAwesomeIcon icon={faFileContract} size="xl" />;
  return(
    <div className="recruitment">
      {recruitment}
    </div>
  );
}

export default Recruitment;