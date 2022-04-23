import React, { useMemo } from "react";
import "./FrsePortfolioLogo.scss";

const FrsePortfolioLogo: React.FC = () => {
  console.log("public", process.env);

  const logoSrc = useMemo(() => process.env.PUBLIC_URL + "/logo.png", []);
  const logoAlt = useMemo(() => "Sebastian Fries Portfolio Logo", []);

  return <img className="frse-portfolio-logo" src={logoSrc} alt={logoAlt} />;
};

export default FrsePortfolioLogo;
