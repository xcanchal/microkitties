import { css, createGlobalStyle } from 'styled-components';

const GlobalStyles = css`
  * {
    box-sizing: border-box;
  }

  #app {
    min-height: 100vh;
  }

  .layout-content {
    padding: 24px;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
  }

  html, body {
    margin: 0;
    padding: 0;
  }
`;

export default createGlobalStyle`
  ${GlobalStyles}
`;
