import React, { useCallback, useState } from "react";
import cs from "classnames";
import "./FrseSocialMenu.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faRotate,
  faSun,
  faUpDownLeftRight,
} from "@fortawesome/free-solid-svg-icons";

const FrseSocialMenu: React.FC = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [ripple, setRipple] = useState(false);

  const navItemClassName = cs("nav-item", {
    "slide-out": isToggled,
  });
  const wobbleClassName = cs("wobble", {
    ripple: ripple,
  });

  const handleOnToggle = useCallback(() => {
    setIsToggled(!isToggled);
    setRipple(true);
    setTimeout(() => {
      setRipple(false);
    }, 1200);
  }, [isToggled]);

  return (
    <>
      <div className="nav">
        <div className={wobbleClassName} />
        <div className={wobbleClassName} />
        <div id="toggle-nav" className="toggle" onClick={handleOnToggle}>
          <span className="hamburger hamburger-1" />
          <span className="hamburger hamburger-2" />
          <span className="hamburger hamburger-3" />
        </div>
        <nav>
          <div className={navItemClassName}>
            {/* <FontAwesomeIcon icon={faUpDownLeftRight} /> */}
            <FontAwesomeIcon icon={faRotate} />
          </div>
          <div className={navItemClassName}>
            <FontAwesomeIcon icon={faSun} />
          </div>
          <div className={navItemClassName}>
            <FontAwesomeIcon icon={faInstagram} />
          </div>
          <div className={navItemClassName}>
            <FontAwesomeIcon icon={faLinkedin} />
          </div>
        </nav>
      </div>

      <svg
        className="nav-filter"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <defs>
          <filter id="shadowed-goo">
            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="8" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feGaussianBlur in="goo" stdDeviation="3" result="shadow" />
            <feColorMatrix
              in="shadow"
              mode="matrix"
              values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2"
              result="shadow"
            />
            <feOffset in="shadow" dx="1" dy="1" result="shadow" />
            <feBlend in2="shadow" in="goo" result="goo" />
            <feBlend in2="goo" in="SourceGraphic" result="mix" />
          </filter>
        </defs>
      </svg>
    </>
  );
};

export default FrseSocialMenu;
