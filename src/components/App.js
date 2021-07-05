import React from "react";
import GlobalStyle from "../styles";
import styled from "styled-components";

const App = () => (
  <>
    <GlobalStyle />
    <Subtitle>Hola mundo</Subtitle>
  </>
);

const Subtitle = styled.h3`
  color: red;
`;

export default App;
