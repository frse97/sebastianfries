import React, { ReactNode, useState } from "react";
import cs from "classnames";
import "./FrseCube.scss";

interface IFrseCube {
  /**
   * The content of the front face
   */
  front?: ReactNode;
  /**
   * The content of the back face
   */
  back?: ReactNode;
  /**
   * The content of the top face
   */
  top?: ReactNode;
  /**
   * The content of the bottom face
   */
  bottom?: ReactNode;
  /**
   * The content of the left face
   */
  left?: ReactNode;
  /**
   * The content of the right face
   */
  right?: ReactNode;
}

type CubeFaces = "front" | "back" | "left" | "right" | "top" | "bottom";

const FrseCube: React.FC<IFrseCube> = (props) => {
  const { front, back, top, bottom, left, right } = props;

  const [selected, setSelected] = useState<CubeFaces>("front");
  const [isSpinning, setIsSpinning] = useState<boolean>(true);

  const cubeClassName = cs("cube", {
    "show-front": selected === "front",
    "show-back": selected === "back",
    "show-top": selected === "top",
    "show-bottom": selected === "bottom",
    "show-left": selected === "left",
    "show-right": selected === "right",
    "is-spinning": isSpinning,
  });

  const handleOnChangeFace = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value as CubeFaces);
  };

  const handleOnSpin = () => {
    isSpinning ? setIsSpinning(false) : setIsSpinning(true);
  };

  return (
    <>
      <div className="container">
        <div className={cubeClassName}>
          <div className="cube-face cube-face-front">{front}</div>
          <div className="cube-face cube-face-back">{back}</div>
          <div className="cube-face cube-face-left">{left}</div>
          <div className="cube-face cube-face-right">{right}</div>
          <div className="cube-face cube-face-top">{top}</div>
          <div className="cube-face cube-face-bottom">{bottom}</div>
        </div>
      </div>
      {/* <div className="radio-group">
        <label>
          <input
            type="radio"
            name="rotate-cube"
            value="front"
            checked={selected === "front"}
            onChange={handleOnChangeFace}
          />
          <span>Front</span>
        </label>
        <label>
          <input
            type="radio"
            name="rotate-cube"
            value="back"
            checked={selected === "back"}
            onChange={handleOnChangeFace}
          />
          <span>Back</span>
        </label>
        <label>
          <input
            type="radio"
            name="rotate-cube"
            value="left"
            checked={selected === "left"}
            onChange={handleOnChangeFace}
          />
          <span>Left</span>
        </label>
        <label>
          <input
            type="radio"
            name="rotate-cube"
            value="right"
            checked={selected === "right"}
            onChange={handleOnChangeFace}
          />
          <span>Right</span>
        </label>
        <label>
          <input
            type="radio"
            name="rotate-cube"
            value="top"
            checked={selected === "top"}
            onChange={handleOnChangeFace}
          />
          <span>Top</span>
        </label>
        <label>
          <input
            type="radio"
            name="rotate-cube"
            value="bottom"
            checked={selected === "bottom"}
            onChange={handleOnChangeFace}
          />
          <span>Bottom</span>
        </label>
      </div>
      <div className="buttons">
        <button onClick={handleOnSpin}>
          {isSpinning ? "Stop spinning" : "Start spinning"}
        </button>
      </div> */}
    </>
  );
};

export default FrseCube;
