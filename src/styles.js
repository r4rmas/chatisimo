import { createGlobalStyle } from "styled-components";

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
`;

export default GlobalStyle;
