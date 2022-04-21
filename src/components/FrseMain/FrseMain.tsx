import React, { ReactNode } from "react";
import "./FrseMain.scss";

interface IFrseMain {
  /**
   * The children of the component
   */
  children?: ReactNode;
}

const FrseMain: React.FC<IFrseMain> = (props) => {
  const { children } = props;

  return <main className="frse-main">{children}</main>;
};

export default FrseMain;
