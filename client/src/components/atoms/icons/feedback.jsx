import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileCirclePlus } from "@fortawesome/free-solid-svg-icons";
import "./feedback.css";

const Feedback = () => {
  const feedback = <FontAwesomeIcon icon={faFileCirclePlus} size="xl" />;
  return(
    <div className="feedback">
      {feedback}
    </div>
  );
}

export default Feedback;