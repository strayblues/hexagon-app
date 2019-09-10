import React, { Component } from "react";
import styled from "styled-components";
import TextArea from "./common/TextArea";

class TextField extends Component {
  constructor() {
    super();
    this.state = {
      inputLength: 0,
      rawDescription: "",
      jsonInput: ""
    };
  }

  onEnter = e => {
    this.setState({ inputLength: e.target.value.length });
    if (e.key === "Enter" && this.state.rawDescription !== "") {
      alert("data: " + this.state.rawDescription);
    }
    this.setState({
      rawDescription: e.target.value.substr(0, this.state.inputLength)
    });
  };

  // Should all lines be numbered or IDed to begin with?
  // TODO: functions: handleInputChange/submit, addInputToData, etc.

  render() {
    return (
      <>
        <Container>
          <Instructions />
          <InputContainer>
            <LineNumbering>1</LineNumbering>
            <DescriptionInput
              onKeyUp={this.onEnter}
              rawDescription={this.state.rawDescription}
              placeholder="Start here..."
              autofocus="autofocus"
            ></DescriptionInput>
          </InputContainer>
          <div>{this.state.rawDescription}</div>
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
const LineNumbering = styled(TextArea)`
  flex-grow: 4;
`;
const DescriptionInput = styled(TextArea)`
  flex-grow: 1;
`;
