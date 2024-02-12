import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./candidates.css";

const Candidates = () => {
    const candidates = <FontAwesomeIcon icon={faUser} size="xl" />;
    return(
        <div className="candidates">
        {candidates}
        </div>
    );
    }

export default Candidates;