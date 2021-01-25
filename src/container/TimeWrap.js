import React from 'react';
import styled from 'styled-components';

const StyleTimeWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  height: 90px;
`;

const TimeWrap = ({ children }) => {
  return (
    <StyleTimeWrap>
      {children}
    </StyleTimeWrap>
  );
};

export default TimeWrap;
