import React, { useCallback, useEffect, useState } from "react";
import "./App.scss";
import { FrseHeader, FrseMain, FrseFooter } from "./components";

const App: React.FC = () => {
  const [isSpinning, setIsSpinning] = useState<boolean>(false);

  useEffect(() => {
    // Initialization
    document.documentElement.setAttribute("data-theme", "dark");
    document.documentElement.setAttribute("data-vars", "frse");
  });

  const handleOnSpin = useCallback(() => {
    isSpinning ? setIsSpinning(false) : setIsSpinning(true);
  }, [isSpinning]);

  return (
    <div className="app">
      <FrseHeader />
      <FrseMain spinning={isSpinning} />
      <FrseFooter spinning={isSpinning} onSpin={handleOnSpin} />
    </div>
  );
};

export default App;
