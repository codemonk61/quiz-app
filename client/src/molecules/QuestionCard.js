
import Card from '../atoms/Card'
import Input from '../atoms/Input';
import React from 'react';
import styled from 'styled-components';

// Define a styled div
const StyledCard = styled(Card)`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;
  cursor: pointer;
`;

const QuestionCard = ({ type, id, name, value, checked, disabled, option, onAnswerChange }) => {

    return (
        <StyledCard border={checked ? "green" : "#fff"} noshadow="true" bgcolor={checked? "#fff" :"#F5F5FD"}>
            <Input
                type={type}
                title={option}
                checked={checked}
                value={value}
                id={id}
                onChange={onAnswerChange}
            />
        </StyledCard>
    )
}

export default QuestionCard