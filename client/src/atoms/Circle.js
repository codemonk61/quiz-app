import React from 'react';
import styled from 'styled-components';

// Styled component for the circle
const StyledCircle = styled.div`
  width: ${(props) => props.size || '100px'};
  height: ${(props) => props.size || '100px'};
  background-color: ${(props) => props.bgcolor || '#3498db'}; /* Default color */
  border-radius: 50%; /* Makes it a circle */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Circle = ({ height = '100px', width = '100px', bgcolor = '#3498db', children }) => {
  // Use the smallest of height or width to maintain a perfect circle
  const size = height === width ? height : width;

  return (
    <StyledCircle size={size} bgcolor={bgcolor}>
      {children}
    </StyledCircle>
  );
};

export default Circle;
