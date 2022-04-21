import React from "react";
import "./App.scss";
import { FrseHeader, FrseMain, FrseFooter, FrseCube } from "./components";

const App: React.FC = () => {
  return (
    <div className="app">
      <FrseHeader />
      <FrseMain>
        <FrseCube />
      </FrseMain>
      <FrseFooter />
    </div>
  );
};

export default App;
