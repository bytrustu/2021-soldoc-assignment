import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const StyleLabel = styled.div`
  padding: 0;
  margin-top: 20px;
`;

const StyleTitle = styled.div`
  margin-bottom: 12px;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyleLink = styled(Link)`
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0;
  color: #1E1E1E;
`

const Label = ({ title, link, linkText, children }) => {
  return (
    <StyleLabel>
      <StyleTitle>
        {title}
        {
          link && <StyleLink to={link}>{linkText}</StyleLink>
        }
      </StyleTitle>
      {children}
    </StyleLabel>
  );
};

export default React.memo(Label);
