import styled, { createGlobalStyle } from "styled-components";
import colors from "./colors";

const GlobalStyle = createGlobalStyle`
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;     
    }

    html {
      font-size: 62.5%;
    }

    body {
      font-family: 'Lato', sans-serif;
      font-size: 1.4rem;
    }
    button {
      border: none;
      color: ${colors.black};
      cursor: pointer;
      font-family: 'Lato';
      font-size: 1.6rem;
      font-weight: bold;
      outline: none;
      padding: 1rem;
      width: 14rem;
    }
    a {
      text-decoration: none;
    }
    #app {
      height: 100vh;
      width: 100vw;
    }
`;

export const Maxwidth = styled.div`
  max-width: 1024px;
  width: 100%;
`;

export const Screen = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Page = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

export const Pressabe = styled.button`
  background-color: #ffffffff;
`;

export const ButtonBlue = styled.button`
  background-color: ${colors.blue};
  color: ${colors.white};
`;

export default GlobalStyle;
