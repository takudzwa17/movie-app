import React from 'react';
import { GlobalStyle } from './GlobalStyle';
import Header from './components/Header';
import Home from './components/Home';

const App = () => (
  <React.Fragment>
    <Header />
    <Home />
    <GlobalStyle />
  </React.Fragment>
);

export default App;
