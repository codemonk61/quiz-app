import React from 'react'
import styled from 'styled-components';
import Card from '../atoms/Card';

const WrapperDiv = styled.div`
 position: relative;
`;

const StyledCard = styled(Card)`
  position:relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  margin-top: -50px;
  padding-top: 100px;
  border-radius: 30px;
  padding-bottom: 80px
`;

const ImageDiv = styled.div`
  width: 100%;
  height: 150px;
  background: #CD85F7;
`;

const PageContainer = ({ children }) => {
    return (
        <WrapperDiv>
            <ImageDiv></ImageDiv>
            <StyledCard bgcolor="#fff" noshadow="true" paddingmobile="0px" marginmobile="0px">
                {children}
            </StyledCard>
        </WrapperDiv>
    )
}

export default PageContainer