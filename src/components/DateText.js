import React from 'react';
import styled from 'styled-components';

const StyleDateText = styled.div`
  font-weight: 700;
  font-size: 14px;
`;

const DateText = ({date}) => {
  return (
    <StyleDateText>{date}</StyleDateText>
  );
};

export default DateText;