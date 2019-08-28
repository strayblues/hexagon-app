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
          <h1>Align The Tiles</h1>
          <Step>
            <StepElement>
              Show next line when user clicks next. In the end the "Next" button
              is replaced with "Done". Or "Done" is inactive a gray.
            </StepElement>
            <Separator></Separator>
            <p>Finished?</p>
            <p>Click NEXT to get the next instructions:</p>
            <ButtonContainer>
              <ActiveButton>Next</ActiveButton>
              <InactiveButton>Done</InactiveButton>
            </ButtonContainer>
          </Step>
        </StepsContainer>
        <BoardContainer>
          <ColorPicker
            currentColor={this.props.currentColor}
            setColor={this.setColor}
          />
          <EmptyBoard currentColor={this.state.currentColor} />
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
const StepElement = styled(ElementContainer)`
  background-color: lightblue;
  padding: 0.5em;
  border-radius: 4px;
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
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
const ActiveButton = styled(Button)`
  background-color: blue;
  width: 20%;
`;
const InactiveButton = styled(Button)`
  background-color: #aaa;
  width: 20%;
  &:hover {
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0);
  }
`;
const Separator = styled.hr`
  margin: 0 1em;
`;
