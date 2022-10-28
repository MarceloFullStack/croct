import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Inter,sans-serif;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #4DD684;
  }
`;

export default GlobalStyles;
