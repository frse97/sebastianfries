import React from "react";
import { FrseCube } from "../FrseCube";
import "./FrseMain.scss";

interface IFrseMain {
  /**
   * An identifier if the cube is spinning
   */
  spinning: boolean;
}

const FrseMain: React.FC<IFrseMain> = (props) => {
  const { spinning } = props;

  return (
    <main className="frse-main">
      <div className="frse-main-cube">
        <FrseCube spinning={spinning} />
      </div>
    </main>
  );
};

export default FrseMain;
