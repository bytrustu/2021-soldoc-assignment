import React from 'react';
import styled from 'styled-components';

const StyleLogo = styled.img`
  width: 26px;
  height: 26px;
`;

const logo = ({src}) => {
  return (
    <StyleLogo src={src} alt="로고"/>
  );
};

export default logo;
