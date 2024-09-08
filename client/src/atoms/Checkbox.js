import React from 'react';
import styled from 'styled-components';

// Styled container for the circle
const CircleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.size || '24px'};
  height: ${(props) => props.size || '24px'};
  background-color: ${(props) => props.bgcolor}; 
  border-radius: 50%;
  position: relative;
`;


// SmallCircle component
const SmallCircle = ({ correct = false, size = '24px', }) => {
  return (
    <CircleContainer  size={size} bgcolor={correct ? "green" : "red"}>
    </CircleContainer>
  );
};

export default SmallCircle;
