import React from "react";
import { FrsePortfolioLogo } from "../FrsePortfolioLogo";
import "./FrseHeader.scss";

const FrseHeader: React.FC = () => {
  return (
    <header className="frse-header">
      <FrsePortfolioLogo />
      <span>Sebastian Fries</span>
    </header>
  );
};

export default FrseHeader;
