import React  from 'react';
import styled from 'styled-components';
import Logo from '../atoms/Logo';
import Text from '../atoms/Text';
import Circle from '../atoms/Circle';
import Button from '../atoms/Button';
import { Link } from 'react-router-dom';

// Define a styled div
const StyledDiv = styled.div`
height: 100vh;
background: #CD85F7;
background: radial-gradient(at center bottom, #CD85F7, #FFFFFF);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 30px
`;

const StyleLink = styled(Link)`
 text-decoration: none
`

const Home = () => {

    return (
        <StyledDiv>
            <Logo />
            <Circle bgcolor='white' height="250px" width="250px">
                <Text color='red' fontSize='30px' fontWeight="bold">Quiz</Text>
            </Circle>
            <StyleLink to='/questions'>
            <Button
                bgcolor="red"
                color="#fff"
                borderradius="20px"
                fontSize="16px"
                hoverbgcolor="#0056b3"
                icon={null}
                disabled={false}
            >
                Start
            </Button>
           </StyleLink>
        </StyledDiv>
    )
}

export default Home