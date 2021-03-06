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
            <StyledInput placeholder="Start typing here...">
              {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((a, i) => (
                  <textarea placeholder="input..." label={i + 1} />
              ))} */}
            </StyledInput>
          </InputContainer>
        </Container>
      </>
    );
  }
}

export default TextField;

const Container = styled.div``;
const Instructions = styled.div``;

const StyledInput = styled.textarea`
  width: 95%;
  height: 88%;
  margin: 4px;
  background-color: #f5f5f5;
  background-image: -webkit-linear-gradient(left, white 10px, transparent 10px),
    -webkit-linear-gradient(right, white 10px, transparent 10px),
    -webkit-linear-gradient(white 30px, #ccc 30px, #ccc 31px, white 31px);
  background-image: -moz-linear-gradient(left, white 10px, transparent 10px),
    -moz-linear-gradient(right, white 10px, transparent 10px),
    -moz-linear-gradient(white 30px, #ccc 30px, #ccc 31px, white 31px);
  background-image: -ms-linear-gradient(left, white 10px, transparent 10px),
    -ms-linear-gradient(right, white 10px, transparent 10px),
    -ms-linear-gradient(white 30px, #ccc 30px, #ccc 31px, white 31px);
  background-image: -o-linear-gradient(left, white 10px, transparent 10px),
    -o-linear-gradient(right, white 10px, transparent 10px),
    -o-linear-gradient(white 30px, #ccc 30px, #ccc 31px, white 31px);
  background-image: linear-gradient(left, white 10px, transparent 10px),
    linear-gradient(right, white 10px, transparent 10px),
    linear-gradient(white 30px, #ccc 30px, #ccc 31px, white 31px);
  background-size: 100% 100%, 100% 100%, 100% 31px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  line-height: 31px;
  font-size: 18px;
  color: #666;
  padding: 8px;
  &:focus {
    outline: none;
  }
`;
const InputContainer = styled.div`
  height: 80vh;
`;
