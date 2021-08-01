import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "./src/styles";
import ContextProvider from "./src/components/ContextProvider";
import App from "./src/App";

ReactDOM.render(
  <>
    <GlobalStyle />
    <ContextProvider>
      <App />
    </ContextProvider>
  </>,
  document.getElementById("app")
);
