import React, { memo } from "react";
import { FrseAvatar } from "../FrseAvatar";
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
        <FrseCube
          front={
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FrseAvatar />
            </div>
          }
          back="BACK"
          top="TOP"
          bottom="BOTTOM"
          left="LEFT"
          right="RIGHT"
          spinning={spinning}
        />
      </div>
    </main>
  );
};

export default memo(FrseMain);
