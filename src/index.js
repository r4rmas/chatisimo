import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "./styles";
import ContextProvider from "./components/ContextProvider";
import App from "./components/App";

ReactDOM.render(
  <>
    <GlobalStyle />
    <ContextProvider>
      <App />
    </ContextProvider>
  </>,
  document.getElementById("app")
);
