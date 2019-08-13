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
  font-size: 14px;
  margin-top: 16px;
  margin-bottom: 6px;
`;

const StyledInput = styled.textarea`
  align-self: center;
  width: 90%;
  height: 120px;
  border: 3px solid #cccccc;
  font-family: Tahoma, sans-serif;
  box-sizing: border-box;
  padding: 6px;
  color: #444;
  font-size: 18px;
`;
