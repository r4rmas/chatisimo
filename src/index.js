import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "./styles";
import App from "./components/App";

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById("app")
);
