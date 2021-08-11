import styled, { createGlobalStyle } from "styled-components";
import colors from "./colors";
import screens from "./screens";

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
      background-color: ${colors.white};
      font-family: 'Lato', sans-serif;
      font-size: 1.4rem;
      overflow-x: hidden;
    }
    button {
      border: none;
      cursor: pointer;
      font-family: 'Lato';
      font-size: 1.6rem;
      font-weight: bold;
      outline: none;
      padding: 1rem;
      width: 14rem;
    }
    input {
      color: ${colors.black};
      font-family: "Lato";
      font-size: 1.6rem;
      outline: none;
    }
    a {
      text-decoration: none;
    }
    #app {
      height: 100vh;
      width: 100vw;
    }
`;

export const Center = styled.div`
  margin: 0 auto;
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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  font-size: 1.6rem;
  max-width: 300px;
  width: 100%;
`;

export const Label = styled.label`
  letter-spacing: 0.1rem;
  margin-bottom: 0.8rem;
`;

export const Input = styled.input`
  letter-spacing: 0.1rem;
  margin-bottom: 0.8rem;
`;

export const Pressabe = styled.button`
  background-color: rgba(255, 255, 255, 0);
`;

export const ButtonBlue = styled.button`
  background-color: ${colors.blue};
  color: ${colors.white};
`;

export const Error = styled.span`
  color: ${colors.red};
  font-size: 1.4rem;
  font-weight: bold;
`;

export default GlobalStyle;
