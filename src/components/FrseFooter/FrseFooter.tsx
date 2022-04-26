import React, { memo } from "react";
import { FrseSocialMenu } from "../FrseSocialMenu";
import "./FrseFooter.scss";

const FrseFooter: React.FC = () => {
  return (
    <footer className="frse-footer">
      <FrseSocialMenu />© Sebastian Fries 2022, check out this project on
      <a className="github" href="#">
        Github
      </a>
    </footer>
  );
};

export default memo(FrseFooter);
