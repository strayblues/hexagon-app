import React, { Component } from "react";
import styled from "styled-components";
import Button from "../common/Button";
import taskService from "../../services/taskService";

// Components
// import ElementContainer from "../common/ElementContainer";
import EmptyBoard from "../EmptyBoard";
import TextField from "../TextField";

class Home extends Component {
  state = {};

  componentDidMount() {
    const task = taskService.getEmpty();
    this.setState({ task }); //inputs
  }
  handleTaskDescription = () => {
    // get values from 'inputs'
    // put the values in state, inside the empty 'inputs' array
    taskService.save({ ...this.state });
  };
  handleSend = () => {
    // Store user text and other required info
    this.handleTaskDescription();
    // Move to the "Align" task page
    document.location.href = "align";
  };
  render() {
    return (
      <>
        <BoardContainer>
          <h1>Task</h1>
          <EmptyBoard />
        </BoardContainer>
        <TextFieldContainer>
          <InputContainer>
            <TextField />
          </InputContainer>
          <StyledButton onClick={this.handleSend}>Send</StyledButton>
        </TextFieldContainer>
      </>
    );
  }
}

export default Home;
const ElementContainer = styled.div`
  margin: 1em 2em;
  background-color: white;
  width: 45vw;
  max-height: 75vh;
  overflow: scroll;
`;
const InputContainer = styled(ElementContainer)`
  max-height: 75vh;
  border-radius: 4px;
  transition: all 300ms;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0);
  cursor: pointer;

  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;
const BoardContainer = styled(ElementContainer)``;
const StyledButton = styled(Button)`
  width: 25%;
  align-self: left;
  /* background-color: lightseagreen; */
`;
const TextFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
