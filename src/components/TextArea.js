import React from 'react';
import styled from 'styled-components';
import { getByte } from '../util';


const StyleTextAreaWrap = styled.div`
  position: relative;
`;

const StyleByteText = styled.div`
  position: absolute;
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 0;
  color: #B0B0B0;
  bottom: 9px;
  right: 10px;
`;

const StyleTextArea = styled.textarea`
  width: 100%;
  height: ${(props) => 
        props.disabled ? '115px' : '133px'};
  border-radius: 6px;
  resize: none;
  border: 1px solid #EDEEF0;
  padding: 12px 12px 14px 13px;
  box-sizing: border-box;
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0;
  

  &:focus {
    outline: unset;
  }

  &::placeholder {
    color: #BFBFC0;
    font-weight: 500;
  }

  &:disabled {
    background: #EDEEF0;
  }
`;


const TextArea = ({ value = '', isDisabled = true, placeholder = '', onChange, maxByte }) => {
  const currentByte = getByte(value);
  return (
    <StyleTextAreaWrap>
      <StyleTextArea disabled={isDisabled} placeholder={placeholder} onChange={onChange} value={value} />
      {
        !isDisabled &&
        <StyleByteText>
          {currentByte}/{maxByte} byte
        </StyleByteText>
      }
    </StyleTextAreaWrap>
  );
};

export default TextArea;
