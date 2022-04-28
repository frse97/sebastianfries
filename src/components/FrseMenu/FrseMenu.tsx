import React, { useCallback, useState } from "react";
import cs from "classnames";
import "./FrseMenu.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faMoon,
  faRotate,
  faSun,
  faUpDownLeftRight,
} from "@fortawesome/free-solid-svg-icons";

type ITheme = "light" | "dark";

interface IFrseMenu {
  /**
   * An identifier if the cube is spinning
   */
  spinning: boolean;
  /**
   * A method to change the spinning behaviour
   */
  onSpin: () => void;
}

const FrseMenu: React.FC<IFrseMenu> = (props) => {
  const { spinning, onSpin } = props;

  const [theme, setTheme] = useState<ITheme>("dark");
  const [isToggled, setIsToggled] = useState(false);
  const [ripple, setRipple] = useState(false);

  const hamburgerClassName = cs("hamburger", {
    "is-open": isToggled,
  });
  const navItemClassName = cs("nav-item", {
    "slide-out": isToggled,
  });
  const wobbleClassName = cs("wobble", {
    ripple: ripple,
  });

  // Menu
  const handleOnToggle = useCallback(() => {
    setIsToggled(!isToggled);
    setRipple(true);
    setTimeout(() => {
      setRipple(false);
    }, 1200);
  }, [isToggled]);

  // Theme change
  const handleThemeChange = useCallback(() => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    document.documentElement.setAttribute(
      "data-theme",
      theme === "light" ? "dark" : "light"
    );
  }, [theme]);

  return (
    <>
      <div className="nav">
        <div className={wobbleClassName} />
        <div className={wobbleClassName} />
        <div
          id="toggle-nav"
          className="toggle"
          tabIndex={1}
          onClick={handleOnToggle}
          onKeyDown={handleOnToggle}
        >
          <span className={hamburgerClassName} />
        </div>
        <nav>
          <div className={navItemClassName} onClick={onSpin}>
            <FontAwesomeIcon icon={spinning ? faUpDownLeftRight : faRotate} />
          </div>
          <div className={navItemClassName} onClick={handleThemeChange}>
            <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} />
          </div>
          <div className={navItemClassName}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/essidbrot/"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>{" "}
          </div>
          <div className={navItemClassName}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/sebastian-fries-7321a01a3/"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
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

export default FrseMenu;
