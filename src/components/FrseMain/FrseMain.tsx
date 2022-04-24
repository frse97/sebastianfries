import React, { memo } from "react";
import { FrseActions } from "../FrseActions";
import { FrseCube } from "../FrseCube";
import "./FrseMain.scss";

interface IFrseMain {}

const FrseMain: React.FC<IFrseMain> = (props) => {
  return (
    <main className="frse-main">
      <div className="frse-main-cube">
        <FrseCube
          front="FRONT"
          back="BACK"
          top="TOP"
          bottom="BOTTOM"
          left="LEFT"
          right="RIGHT"
        />
      </div>
      <div className="frse-main-actions">
        <FrseActions />
      </div>
    </main>
  );
};

export default memo(FrseMain);
