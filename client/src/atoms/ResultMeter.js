import React from 'react'
import styled from 'styled-components';
import Text from './Text';

const StyledDiv = styled.div`
  height: 150px;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
box-shadow: 5px 5px 25px 0px rgba(0,0,0,0.2);

`
const Wrapper = styled.div`
   border-radius: 50%;
   border-left: 20px solid lavender;
   border-top: 20px solid lavender;
   border-right: 20px solid lavender;
   border-bottom: 20px solid transparent;
   
`

const ResultMeter = ({percentage}) => {
  return (
    <Wrapper>
    <StyledDiv>
        <Text fontSize="30px" fontWeight="bold">{Math.floor(percentage)}%</Text>
    </StyledDiv>
    </Wrapper>
  )
}

export default ResultMeter