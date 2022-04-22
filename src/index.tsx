import React, { Profiler } from "react";
import * as ReactDOMClient from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.scss";
// Import theme
import "../src/styles/theme.scss";
// Import vars
import "../src/styles/vars.scss";

type RenderCallBackPhases = "mount" | "update";

const onRenderCallback = (id: string, phase?: RenderCallBackPhases) => {
  console.log("PHASE", phase, id);
  // if (phase === "mount") {
  //   document.documentElement.setAttribute("data-theme", "light");
  //   document.documentElement.setAttribute("data-vars", "frse");
  // }
};

// Get DOM element to render the app in.
const container = document.getElementById("root")!;

// Create a root
const root = ReactDOMClient.createRoot(container);

// Initial render
root.render(
  <Profiler id="frse-profiler" onRender={onRenderCallback}>
    <App />
  </Profiler>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
