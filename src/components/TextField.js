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
        <StyledInput placeholder="input..." label="Step 1" />
        <StyledInput placeholder="input..." label="Step 2" />
        <StyledInput placeholder="input..." label="Step 3" />
        <StyledInput placeholder="input..." label="Step 4" />
        <StyledInput placeholder="input..." label="Step 5" />
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
const StyledInput = styled(Input)``;
