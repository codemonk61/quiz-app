import React from 'react';
import styled from 'styled-components';
import Text from '../atoms/Text';

// Define a styled div
const StyledDiv = styled.div`
 height: 100vh;
background: #CD85F7;
background: radial-gradient(at center bottom, #CD85F7, #FFFFFF);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const NotFound = () => {
  return (
    <StyledDiv>
     <Text color="red" fontSize="30px" fontWeight="bold" >Page Not Found!</Text>
    </StyledDiv>
  );
};

export default NotFound;
