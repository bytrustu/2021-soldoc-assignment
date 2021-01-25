import React from 'react';
import styled from 'styled-components';

const StyleLabel = styled.div`
  padding: 0;
  margin-top: 20px;
`;

const StyleTitle = styled.div`
  margin-bottom: 12px;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0em;
`;

const Label = ({ title, children }) => {
  return (
    <StyleLabel>
      <StyleTitle>
        {title}
      </StyleTitle>
      {children}
    </StyleLabel>
  );
};

export default Label;
