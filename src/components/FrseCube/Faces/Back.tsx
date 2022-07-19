import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Faces.scss";
import {
  faDiscord,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
  faWhatsapp,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

const Back: React.FC = () => {
  return (
    <div className="back-content">
      <div className="top-row">Contact me</div>
      <div className="contacts-row">
        <div className="entry">
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:sebastianfries@outlook.com"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
        <div className="entry">
          <a target="_blank" rel="noreferrer" href="tel:+436606400786">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
      </div>
      <div className="contacts-row">
        <div className="entry">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/essidbrot/"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
        <div className="entry">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.tiktok.com/@sebastian.fries"
          >
            <FontAwesomeIcon icon={faTiktok} />
          </a>
        </div>
        <div className="entry">
          <a target="_blank" rel="noreferrer" href="https://twitter.com/Frse97">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>
      <div className="contacts-row">
        <div className="entry">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/sebastian-fries-7321a01a3/"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <div className="entry">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://discord.com/channels/frse97#1789"
          >
            <FontAwesomeIcon icon={faDiscord} />
          </a>
        </div>
        <div className="entry">
          <a target="_blank" rel="noreferrer" href="https://github.com/frse97">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Back;
