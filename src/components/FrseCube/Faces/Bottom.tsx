import { faReact, faSass } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useMemo } from "react";
import "./Faces.scss";

const Bottom: React.FC = () => {
  const rscLogoSrc = useMemo(
    () => process.env.PUBLIC_URL + "/rsc-logo.png",
    []
  );
  const rscLogoAlt = useMemo(() => "RSC Enteprises", []);

  return (
    <div className="bottom-content">
      <div className="top-row">Coming Soon...</div>
      <div className="rsc">
        <div className="content">
          <img src={rscLogoSrc} alt={rscLogoAlt} />
          <span className="title">
            RSC Enterprises refactoring
            <div className="stack">
              <FontAwesomeIcon icon={faReact} />
              <FontAwesomeIcon icon={faSass} />
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
