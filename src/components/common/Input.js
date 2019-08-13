import React from "react";
import styled from "styled-components";

const Input = ({ label, placeholder, className, onChange }) => {
  return (
    <Container className={className}>
      <Label>{label}</Label>
      <StyledInput placeholder={placeholder} onChange={onChange} />
    </Container>
  );
};

export default Input;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.div`
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 10px;
`;

const StyledInput = styled.input`
  align-self: center;
  width: 90%;
  height: 40px;
  border: 1px solid #444;
  box-sizing: border-box;
  padding: 0 20px;
  color: #444;
  font-size: 16px;
`;
