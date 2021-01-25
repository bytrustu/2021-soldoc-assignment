import React from 'react';
import styled from 'styled-components';

const StyleProgress = styled.div`
  position: absolute;
  width: ${props => props.value}%;
  height: 3px;
  left: 0;
  top: 0;
  background: linear-gradient(90deg, #50A0E0 29.87%, #A4D4FA 100%);
`;

const progress = ({ value = 0 }) => {
  return (
    <StyleProgress value={value} />
  );
};

export default progress;
