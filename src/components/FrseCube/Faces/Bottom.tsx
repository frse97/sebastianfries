import {
  faEthereum,
  faReact,
  faSass,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useMemo } from "react";
import "./Faces.scss";

const Bottom: React.FC = () => {
  const rscLogoSrc = useMemo(
    () => process.env.PUBLIC_URL + "/rsc-logo.png",
    []
  );
  const rscLogoAlt = useMemo(() => "RSC Enteprises", []);
  const cronoShaggyGalaxyLogoSrc = useMemo(
    () => process.env.PUBLIC_URL + "/shaggy-logo.png",
    []
  );
  const cronoShaggyGalaxyLogoAlt = useMemo(() => "Crono Shaggy Galaxy", []);

  return (
    <div className="bottom-content">
      <div className="top-row">Coming Soon...</div>
      <div className="rsc">
        <div className="content">
          <img src={rscLogoSrc} alt={rscLogoAlt} />
          <span className="title">RSC Enterprises refactoring</span>
        </div>
        <div className="stack">
          <FontAwesomeIcon icon={faReact} />
          <FontAwesomeIcon icon={faSass} />
        </div>
      </div>
      <div className="shaggy">
        <div className="content">
          <img src={cronoShaggyGalaxyLogoSrc} alt={cronoShaggyGalaxyLogoAlt} />
          <span className="title">Crono Shaggy Galaxy</span>
        </div>
        <div className="stack">
          <FontAwesomeIcon icon={faVuejs} />
          <FontAwesomeIcon icon={faSass} />
          <FontAwesomeIcon icon={faEthereum} />
        </div>
      </div>
    </div>
  );
};

export default Bottom;
