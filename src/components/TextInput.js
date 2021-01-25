import React from 'react';
import styled from 'styled-components';

const StyleTextInput = styled.input`
  height: 56px;
  width: 100%;
  box-sizing: border-box;
  padding: 13px;
  border-radius: 6px;
  border: 1px solid #EDEEF0;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0;

  &:focus {
    outline: unset;
  }
`;

const TextInput = ({ isReadonly, value }) => {
  return (
    <StyleTextInput type="text" value={value} readOnly={isReadonly} />
  );
};

export default React.memo(TextInput);
