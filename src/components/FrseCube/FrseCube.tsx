import React, { useCallback, useState } from "react";
import cs from "classnames";
import "./FrseCube.scss";
import { Back, Bottom, Front, Left, Right, Top } from "./Faces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

interface IFrseCube {
  /**
   * A flag identifying if the cube is spinning
   */
  spinning: boolean;
}

type CubeFaces = "front" | "back" | "left" | "right" | "top" | "bottom";

const FrseCube: React.FC<IFrseCube> = (props) => {
  const { spinning } = props;

  const [selected, setSelected] = useState<CubeFaces>("front");

  const cubeClassName = cs("cube", {
    "show-front": selected === "front",
    "show-back": selected === "back",
    "show-top": selected === "top",
    "show-bottom": selected === "bottom",
    "show-left": selected === "left",
    "show-right": selected === "right",
    "is-spinning": spinning,
  });

  const leftArrowClassNames = cs("arrow", "left-arrow", {
    "is-visible": !spinning,
  });
  const topArrowClassNames = cs("arrow", "top-arrow", {
    "is-visible": !spinning,
  });
  const rightArrowClassNames = cs("arrow", "right-arrow", {
    "is-visible": !spinning,
  });
  const bottomArrowClassNames = cs("arrow", "bottom-arrow", {
    "is-visible": !spinning,
  });

  const handleOnChangeFace = (face: CubeFaces) => {
    setSelected(face);
  };

  const handleLeftClick = useCallback(() => {
    switch (selected) {
      case "back":
        handleOnChangeFace("right");
        break;
      case "bottom":
        handleOnChangeFace("left");
        break;
      case "front":
        handleOnChangeFace("left");
        break;
      case "left":
        handleOnChangeFace("back");
        break;
      case "right":
        handleOnChangeFace("front");
        break;
      case "top":
        handleOnChangeFace("left");
        break;
    }
  }, [selected]);

  const handleTopClick = useCallback(() => {
    switch (selected) {
      case "back":
        handleOnChangeFace("bottom");
        break;
      case "bottom":
        handleOnChangeFace("front");
        break;
      case "front":
        handleOnChangeFace("top");
        break;
      case "left":
        handleOnChangeFace("top");
        break;
      case "right":
        handleOnChangeFace("top");
        break;
      case "top":
        handleOnChangeFace("back");
        break;
    }
  }, [selected]);

  const handleRightClick = useCallback(() => {
    switch (selected) {
      case "back":
        handleOnChangeFace("left");
        break;
      case "bottom":
        handleOnChangeFace("right");
        break;
      case "front":
        handleOnChangeFace("right");
        break;
      case "left":
        handleOnChangeFace("front");
        break;
      case "right":
        handleOnChangeFace("back");
        break;
      case "top":
        handleOnChangeFace("right");
        break;
    }
  }, [selected]);

  const handleBottomClick = useCallback(() => {
    switch (selected) {
      case "back":
        handleOnChangeFace("top");
        break;
      case "bottom":
        handleOnChangeFace("back");
        break;
      case "front":
        handleOnChangeFace("bottom");
        break;
      case "left":
        handleOnChangeFace("bottom");
        break;
      case "right":
        handleOnChangeFace("bottom");
        break;
      case "top":
        handleOnChangeFace("front");
        break;
    }
  }, [selected]);

  return (
    <div className="frse-cube-content">
      <div className="top-arrow-container">
        <button className={topArrowClassNames}>
          <FontAwesomeIcon icon={faChevronUp} onClick={handleTopClick} />
        </button>
      </div>
      <div className="body-container">
        <div className="left-arrow-container">
          <button className={leftArrowClassNames}>
            <FontAwesomeIcon icon={faChevronLeft} onClick={handleLeftClick} />
          </button>
        </div>
        <div className="container">
          <div className={cubeClassName}>
            <div className="cube-face cube-face-front">
              <Front />
            </div>
            <div className="cube-face cube-face-back">
              <Back />
            </div>
            <div className="cube-face cube-face-left">
              <Left />
            </div>
            <div className="cube-face cube-face-right">
              <Right />
            </div>
            <div className="cube-face cube-face-top">
              <Top />
            </div>
            <div className="cube-face cube-face-bottom">
              <Bottom />
            </div>
          </div>
        </div>
        <div className="right-arrow-container">
          <button className={rightArrowClassNames}>
            <FontAwesomeIcon icon={faChevronRight} onClick={handleRightClick} />
          </button>
        </div>
      </div>
      <div className="bottom-arrow-container">
        <button className={bottomArrowClassNames}>
          <FontAwesomeIcon icon={faChevronDown} onClick={handleBottomClick} />
        </button>
      </div>
    </div>
  );
};

export default FrseCube;
