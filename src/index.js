import React from "react";
import ReactDom from "react-dom";
import App from "./App";
// rotter
import { BrowserRouter } from "react-router-dom";
// all components
import "./Components/style.css";
ReactDom.render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>,
  document.querySelector("#root")
);
