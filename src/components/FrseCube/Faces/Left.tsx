import React, { memo } from "react";
import "./Faces.scss";

const Left: React.FC = () => {
  return <div className="left-content">Left</div>;
};

export default memo(Left);
