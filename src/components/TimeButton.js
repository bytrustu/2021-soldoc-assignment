import React from 'react';
import styled from 'styled-components';

const StyleTimeButton = styled.button`
  height: 40px;
  width: 73px;
  border-radius: 6px;
  border: 1px solid #EDEEF0;
  background-color: ${(props) =>
          props.active ? '#50A0E0' : '#FFF'};
  color: ${(props) =>
          props.active && '#FFF'};
  cursor: pointer;
  font-size: 14px;
  color: ${(props) =>
          props.active ? 700 : 500};
  letter-spacing: 0;
`;

const TimeButton = ({ text, onClickHandle, active }) => {
  return (
    <StyleTimeButton onClick={onClickHandle} value={text} active={active}>
      {text}
    </StyleTimeButton>
  );
};

export default React.memo(TimeButton);
