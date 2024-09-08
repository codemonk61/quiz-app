import React from 'react'
import Card from '../atoms/Card'
import Text from '../atoms/Text'
import styled from 'styled-components';
import SmallCircle from '../atoms/Checkbox';

const StyleCard = styled(Card)`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 30px;
`
const ResultStatusCard = ({value, type, }) => {

  return (
    <StyleCard noshadow="true" bgcolor={type === 'correct' ? "#c3ffb3" : "#ffb3b3"}>
        <SmallCircle correct={type === 'correct' ? true : false}/> <Text>{value} {type}</Text>
    </StyleCard>
  )
}

export default ResultStatusCard