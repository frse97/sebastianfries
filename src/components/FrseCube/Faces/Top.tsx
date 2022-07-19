import React, { useMemo } from "react";
import "./Faces.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEthereum,
  faLess,
  faReact,
  faSass,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";

const Top: React.FC = () => {
  const wbiLogoSrc = useMemo(
    () => process.env.PUBLIC_URL + "/wivio-logo.png",
    []
  );
  const wbiLogoAlt = useMemo(() => "WBI Wissensmanegent WIVIO", []);
  const noraGaliLogoSrc = useMemo(
    () => process.env.PUBLIC_URL + "/noragali-logo.png",
    []
  );
  const noraGaliLogoAlt = useMemo(() => "NoraGali, SMM, Content Creator", []);

  const cronoShaggyGalaxyLogoSrc = useMemo(
    () => process.env.PUBLIC_URL + "/shaggy-logo.png",
    []
  );
  const cronoShaggyGalaxyLogoAlt = useMemo(() => "Crono Shaggy Galaxy", []);

  return (
    <div className="top-content">
      <div className="top-row">Project</div>
      <div className="wbi">
        <div className="content">
          <img src={wbiLogoSrc} alt={wbiLogoAlt} />
          <span className="title">
            <a
              href="https://www.wbi-wissensmanagement.com/"
              target="_blank"
              rel="noreferrer"
            >
              WBI Wissensmanagement
            </a>
            <div className="stack">
              <FontAwesomeIcon icon={faReact} />
              <FontAwesomeIcon icon={faLess} />
            </div>
          </span>
        </div>
      </div>
      <div className="noragali">
        <div className="content">
          <img src={noraGaliLogoSrc} alt={noraGaliLogoAlt} />
          <span className="title">
            <a href="https://www.noragali.it/" target="_blank" rel="noreferrer">
              NoraGali Homepage
            </a>
            <div className="stack">
              <FontAwesomeIcon icon={faReact} />
              <FontAwesomeIcon icon={faSass} />
            </div>
          </span>
        </div>
      </div>
      <div className="shaggy">
        <div className="content">
          <img src={cronoShaggyGalaxyLogoSrc} alt={cronoShaggyGalaxyLogoAlt} />
          <span className="title">
            <a
              href="https://shaggygalaxy.club/"
              target="_blank"
              rel="noreferrer"
            >
              Crono Shaggy Galaxy
            </a>
            <div className="stack">
              <FontAwesomeIcon icon={faVuejs} />
              <FontAwesomeIcon icon={faSass} />
              <FontAwesomeIcon icon={faEthereum} />
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Top;
