import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import "./interview.css";
const Interview = () => {
    const interview = <FontAwesomeIcon icon={faVideo} size="xl" />;
    return(
        <div className="interview">
        {interview}
        </div>
    );
    }   

export default Interview;