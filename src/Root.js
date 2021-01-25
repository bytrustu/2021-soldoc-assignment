import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import store from './redux/store/configureStore';

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </Provider>
);

const GlobalStyle = createGlobalStyle`
  ${reset}

  @import url(https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css);
  * {
    font-family: 'Spoqa Han Sans', 'Spoqa Han Sans JP', 'Sans-serif';
  }

  body {
    margin: 0;
    overflow: hidden;
    background-color: #E5E5E5;
  }

  button {
    &:focus {
      outline: unset;
    }
  }

  #root {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export default Root;