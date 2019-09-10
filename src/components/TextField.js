import React, { Component } from "react";
import styled from "styled-components";

class TextField extends Component {
  state = {
    isEnter: false
  };

  trackEnter = e => {
    if (e.key === "Enter") {
      alert("enter pressed");
      this.setState({ isEnter: true });
    }
  };

  // TODO: functions: handleInputChange/submit, addInputToData, etc.

  render() {
    return (
      <>
        <Container>
          <Instructions />
          <InputContainer>
            <LineNumbering>1</LineNumbering>
            <DescriptionInput
              onKeyUp={this.trackEnter}
              placeholder="Start typing here..."
            ></DescriptionInput>
          </InputContainer>
        </Container>
      </>
    );
  }
}

export default TextField;

const Container = styled.div``;
const Instructions = styled.div``;
const InputContainer = styled.div`
  height: 80vh;
  display: flex;
`;
const LineNumbering = styled.textarea`
  width: 7%;
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
  line-height: 31px;
  font-size: 18px;
  color: #666;
  border-color: white;
  padding: 8px;
  &:focus {
    outline: none;
  }
`;
const DescriptionInput = styled.textarea`
  width: 100%;
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
  /* border: 1px solid #ccc; */
  border-color: white;
  border-radius: 8px;
  /* box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1); */
  line-height: 31px;
  font-size: 18px;
  color: #666;
  padding: 8px;
  &:focus {
    outline: none;
  }
`;
