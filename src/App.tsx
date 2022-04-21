import React from "react";
import "./App.scss";
import { FrseHeader, FrseAvatar, FrseMain, FrseFooter } from "./components";

const App: React.FC = () => {
  return (
    <div className="app">
      <FrseHeader />
      <FrseMain>
        <FrseAvatar />
      </FrseMain>
      <FrseFooter />
    </div>
  );
};

export default App;
