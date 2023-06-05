import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }

  body, #root {
  height: 100%;
  }

  ul, ol, li {
  list-style: none;
  }

  a {
    :link,
    :visited {
      color: ${(props) => props.theme.colors.black[0]};
    }
    :hover {
      color: ${(props) => props.theme.colors.blue[6]};
    }
  }

  input {
    appearance: none;
  }
`;

export default GlobalStyle;
