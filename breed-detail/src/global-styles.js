import { css, createGlobalStyle } from 'styled-components';

const GlobalStyles = css`
  * {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6, p, small, i, span, ul, li, b, strong {
    font-family: Helvetica Neue, Arial, Sans-serif;
  }

  html, body {
    margin: 0;
    padding: 0;
  }

  #breeds-app {
    padding: 20px;
  }
`;

export default createGlobalStyle`
  ${GlobalStyles}
`;
