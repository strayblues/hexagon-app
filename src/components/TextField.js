import React, { Component } from "react";
import styled from "styled-components";
import Button from "./common/Button";
import Input from "./common/Input";

class TextField extends Component {
  state = {};

  // TODO: functions: handleInputChange, addInput, etc.

  render() {
    return (
      <Container>
        <Instructions />
        <InputContainer>
          <StyledInput placeholder="input..." label="1" />
          <StyledInput placeholder="input..." label="2" />
          <StyledInput placeholder="input..." label="3" />
          <StyledInput placeholder="input..." label="4" />
          <StyledInput placeholder="input..." label="5" />
          <StyledInput placeholder="input..." label="6" />
          <StyledInput placeholder="input..." label="7" />
          <StyledInput placeholder="input..." label="8" />
          <StyledInput placeholder="input..." label="9" />
          <StyledInput placeholder="input..." label="10" />
        </InputContainer>
        <StyledButton>Send</StyledButton>
      </Container>
    );
  }
}

export default TextField;

const Container = styled.div``;
const Instructions = styled.div``;
const StyledButton = styled(Button)`
  background-color: lightseagreen;
  margin: 1.33em;
`;
const StyledInput = styled(Input)`
  background-color: #f5f5f5;
`;
const InputContainer = styled.div``;
