import React from 'react';
import { createGlobalStyle } from 'styled-components';

import { Board } from './components/Board';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Poppins');

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Poppins', sans-serif;
  }
`;

export const App = () => (
  <>
    <GlobalStyles />
    <Board />
  </>
);
