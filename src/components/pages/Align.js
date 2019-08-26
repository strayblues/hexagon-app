import React, { Component } from "react";
import styled from "styled-components";
import taskService from "../../services/taskService";

// Components
// import ElementContainer from "../common/ElementContainer";
import EmptyBoard from "../EmptyBoard";
import ColorPalette from "../common/ColorPalette";
import Button from "../common/Button";

class Align extends Component {
  state = {};

  componentDidMount() {
    const taskToVerify = taskService.getCompletedTask();
    this.setState({ taskToVerify }); // "verify" page
  }
  handleSubmitVerificaion = () => {
    // completedTaskWithVerification.verification.push(new verification)
    // taskService.save({ completedTaskWithVerification });
  };
  render() {
    return (
      <>
        <StepsContainer>
          <h1>Task</h1>
          <Step>Show next line of Instructions when user done</Step>
        </StepsContainer>
        <BoardContainer>
          <ColorPalette />
          <EmptyBoard />
          <StyledButton>Done</StyledButton>
        </BoardContainer>
      </>
    );
  }
}

export default Align;

const ElementContainer = styled.div`
  margin: 2em;
  background-color: white;
  width: 45vw;
  max-height: 65vh;
`;
const Step = styled.div``;
const StepsContainer = styled(ElementContainer)``;
const BoardContainer = styled(ElementContainer)`
  cursor: pointer;
  display: flex;
  flex-direction: column;
`;
const StyledButton = styled(Button)`
  width: 25%;
  align-self: flex-end;
  background-color: lightseagreen;
`;
