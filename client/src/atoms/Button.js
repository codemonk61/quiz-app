import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const StyledButton = styled.button`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background-color: ${(props) => props.bgcolor || '#007bff'};
  color: ${(props) => props.color || '#fff'};
  border: none;
  border-radius: ${(props) => props.borderradius || '4px'};
  font-size: ${(props) => props.fontSize || '16px'};
  cursor: pointer;
  outline: none;
  margin-left: ${(props) => props.iconspace || '8px'};
  &:hover {
    background-color: ${(props) => props.hoverbgcolor || '#0056b3'};
  }

  // Icon styling
  svg {
    margin-left: ${(props) => props.iconspace || '8px'};
  }
`;

// Button component
const Button = ({ icon, children, ...props }) => {
  return (
    <StyledButton {...props}>
      {children}
      {icon && <div><FontAwesomeIcon icon={icon} /></div>}
    </StyledButton>
  );
};

export default Button;

