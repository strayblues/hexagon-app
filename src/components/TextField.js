import React, { Component } from "react";
import styled from "styled-components";
import Input from "./common/Input";

class TextField extends Component {
  state = {};

  // TODO: functions: handleInputChange, addInput, etc.

  render() {
    return (
      <>
        <Container>
          <Instructions />
          <InputContainer>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((object, i) => (
              <StyledInput placeholder="input..." label={i + 1} />
            ))}
          </InputContainer>
        </Container>
      </>
    );
  }
}

export default TextField;

const Container = styled.div``;
const Instructions = styled.div``;

const StyledInput = styled(Input)`
  background-color: #f5f5f5;
`;
const InputContainer = styled.div``;
