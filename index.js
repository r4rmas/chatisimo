import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "./src/styles";
import App from "./src/App";

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById("app")
);
