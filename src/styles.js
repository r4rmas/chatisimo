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

export const Maxwidth = styled.div`
  max-width: 1024px;
  width: 100%;
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
  color: ${colors.black};
  display: flex;
  flex-direction: column;
  font-size: 1.6rem;
  max-width: 300px;
  width: 100%;
`;

export const Label = styled.label`
  letter-spacing: 0.1rem;
  margin-bottom: 1rem;
`;

export const Input = styled.input`
  letter-spacing: 0.1rem;
  margin-bottom: 1rem;
  padding: 0.1rem;
`;

export const Pressabe = styled.button`
  background-color: #ffffffff;
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
