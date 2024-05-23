import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    font-family: 'Arial', sans-serif;
    line-height: 1.5;
  }
`;

export default GlobalStyle;
