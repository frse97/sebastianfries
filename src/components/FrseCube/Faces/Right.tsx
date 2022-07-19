import {
  faApple,
  faCss3,
  faFigma,
  faHtml5,
  faJs,
  faLess,
  faReact,
  faSass,
  faVuejs,
  faWindows,
} from "@fortawesome/free-brands-svg-icons";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarOutlined } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Faces.scss";

const Right: React.FC = () => {
  return (
    <div className="right-content">
      <div className="top-row">Technology Stack</div>
      <div className="entry">
        <FontAwesomeIcon icon={faReact} />
        <span>React</span>
        <div className="star-container">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStarHalfStroke} />
          <FontAwesomeIcon icon={faStarOutlined} />
        </div>
      </div>
      <div className="entry">
        <FontAwesomeIcon icon={faVuejs} />
        <span>Vue</span>
        <div className="star-container">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStarOutlined} />
          <FontAwesomeIcon icon={faStarOutlined} />
          <FontAwesomeIcon icon={faStarOutlined} />
          <FontAwesomeIcon icon={faStarOutlined} />
        </div>
      </div>
      <div className="entry">
        <FontAwesomeIcon icon={faSass} />
        <span>Sass</span>
        <div className="star-container">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStarOutlined} />
        </div>
      </div>
      <div className="entry">
        <FontAwesomeIcon icon={faLess} />
        <span>Less</span>
        <div className="star-container">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStarOutlined} />
        </div>
      </div>
      <div className="entry-other">
        <FontAwesomeIcon icon={faWindows} />
        <FontAwesomeIcon icon={faApple} />
        <FontAwesomeIcon icon={faHtml5} />
        <FontAwesomeIcon icon={faCss3} />
        <FontAwesomeIcon icon={faJs} />
        <FontAwesomeIcon icon={faFigma} />
      </div>
    </div>
  );
};

export default Right;
