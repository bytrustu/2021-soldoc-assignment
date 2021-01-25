import React from 'react';
import styled from 'styled-components';

const StyleMain = styled.div`
    box-sizing: border-box;
    position: relative;
    width: 375px;
    height: 667px;
    background-color: #fff;
    padding: 56px 30px 27px;
`;

const Main = ({ children }) => {
  return (
    <StyleMain>
      {children}
    </StyleMain>
  );
};

export default Main;
