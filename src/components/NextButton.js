import React from 'react';
import styled from 'styled-components';
import arrowRight from '../static/images/arrow_right.svg';

const StyleTimeButton = styled.button`
  height: 40px;
  width: 73px;
  border-radius: 6px;
  border: 1px solid #EDEEF0;
  background-color: #FFF;
  cursor: pointer;
`;

const TimeButton = ({ onClickHandle }) => {
  return (
    <StyleTimeButton onClick={onClickHandle}>
      <img src={arrowRight} alt="다음버튼" />
    </StyleTimeButton>
  );
};

export default TimeButton;
