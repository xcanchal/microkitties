import { css, createGlobalStyle } from 'styled-components';

const GlobalStyles = css`
  * {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
  }
`;

export default createGlobalStyle`
  ${GlobalStyles}
`;