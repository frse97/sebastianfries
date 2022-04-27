import React from "react";
import { FrseMenu } from "../FrseMenu";
import "./FrseFooter.scss";

interface IFooter {
  /**
   * An identifier if the cube is spinning
   */
  spinning: boolean;
  /**
   * A method to change the spinning behaviour
   */
  onSpin: () => void;
}

const FrseFooter: React.FC<IFooter> = (props) => {
  const { spinning, onSpin } = props;

  return (
    <footer className="frse-footer">
      <FrseMenu spinning={spinning} onSpin={onSpin} />
      <span>© Sebastian Fries 2022 </span>
      <div className="github-container">
        <span>Check out this project on</span>
        <a
          aria-label="Sebastian Fries Portfolio Project on Github"
          className="github"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/frse97/sebastianfries"
        >
          Github
        </a>
      </div>
    </footer>
  );
};

export default FrseFooter;
