import React from 'react';
import styled from 'styled-components';

const StyleConfirmButton = styled.button`
  position: absolute;
  width: 315px;
  height: 49px;
  left: 30px;
  top: 591px;
  color: #fff;
  border: unset;
  background: linear-gradient(272.03deg, #50A0E0 34.58%, #A4D4FA 97.7%);
  border-radius: 6px;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0;
  cursor: pointer;
`;

const ConfirmButton = ({text, onClickHandle}) => {
  return (
    <StyleConfirmButton onClick={onClickHandle}>
      {text}
    </StyleConfirmButton>
  );
};

export default ConfirmButton;
