import React from "react";
import { FrseSocialMenu } from "../FrseSocialMenu";
import "./FrseActions.scss";

interface IFrseActions {}

const FrseActions: React.FC<IFrseActions> = (props) => {
  return (
    <>
      <FrseSocialMenu />
    </>
  );
};

export default FrseActions;
