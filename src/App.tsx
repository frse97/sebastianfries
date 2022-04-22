import React, { useEffect } from "react";
import "./App.scss";
import { FrseHeader, FrseMain, FrseFooter, FrseCube } from "./components";

const App: React.FC = () => {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");
    document.documentElement.setAttribute("data-vars", "frse");
  });

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
