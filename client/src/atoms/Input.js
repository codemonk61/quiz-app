// src/components/Input.js
import React from 'react';
import styled from 'styled-components';

// Define styled components
const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  margin-left: 0.5rem;
  font-size: 1rem;
`;

const StyledInput = styled.input`
  position: relative;
  cursor: pointer;
  outline: none;
  width: 20px;
  height: 20px;
  appearance: none; 
  border: 2px solid #ccc; 
  border-radius: 50%;

  &:checked {
    background-color: green;
    border: 2px solid green;
    color: white;
  }

  &:checked::after {
    content: '✔';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 14px;
  }

  /* Style adjustments for focus state */
  &:focus {
    outline: none;
    border-color: green;
  }
`;

// Define the Input component
const Input = ({ type, title, checked, onChange, value, id }) => {
  return (
    <Container>
      <StyledInput
        type={type}
        className={type}
        checked={checked}
        onChange={onChange}
        value={value}
        id={id}
      />
      <Label htmlFor={id}>{title}</Label>
    </Container>
  );
};

export default Input;
