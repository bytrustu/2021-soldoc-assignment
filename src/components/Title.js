import React from 'react';
import styled from 'styled-components';

const StyleTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: 0;
  display: inline-block;
  margin: 20px 0 40px;
`;

const StyleText = styled.span`
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0;
  color: #b0b0b0;
  margin-left: 5px;
`

const Title = ({title, text}) => {
  return (
    <div>
      <StyleTitle>{title}</StyleTitle>
      <StyleText>({text})</StyleText>
    </div>
  );
};

export default Title;
