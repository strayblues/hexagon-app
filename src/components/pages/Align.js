import React, { Component } from "react";
import styled from "styled-components";
import taskService from "../../services/taskService";

// Components
// import ElementContainer from "../common/ElementContainer";
import EmptyBoard from "../EmptyBoard";
import ColorPicker from "../common/ColorPicker";
import Button from "../common/Button";

class Align extends Component {
  state = {};
  setColor(currentColor) {
    this.setState(...currentColor);
  }
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
          <ColorPicker
            currentColor={this.props.currentColor}
            setColor={this.setColor}
          />
          <EmptyBoard currentColor={this.state.currentColor} />
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
`;
const Step = styled.div``;

const BoardContainer = styled(ElementContainer)`
  width: 50vw;
  cursor: pointer;
  display: flex;
  flex-direction: column;
`;
const StepsContainer = styled(ElementContainer)`
  width: 32vw;
`;
const StyledButton = styled(Button)`
  width: 20%;
  /* align-self: flex-end; */
  /* background-color: lightseagreen; */
`;
