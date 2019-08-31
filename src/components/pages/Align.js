import React, { Component } from "react";
import styled from "styled-components";
import taskService from "../../services/taskService";

// Components
import EmptyBoard from "../EmptyBoard";
import ColorPicker from "../common/ColorPicker";
import Button from "../common/Button";

const mockData = {
  tasks: [
    {
      image: {
        _id: "1",
        src: "cat1.jpg"
      },
      description: ["Line 1", "Line 2", "Line 3", "Line 4"],
      verifications: []
    },
    {
      image: {
        _id: "2",
        src: "cat2.jpg"
      },
      description: ["Line 1", "Line 2", "Line 3", "Line 4"],
      verifications: []
    }
  ]
};

const steps = mockData.tasks[0].description;
// const currentStep = steps[i];

class Align extends Component {
  state = {
    taskIndex: 0,
    stepIndex: 0,
    currentColor: "white"
  };

  // advancSteps(steps) {
  //   this.setState(...currentStep);
  // }

  setColor = newColor => {
    this.setState({ currentColor: newColor });
  };
  componentDidMount() {
    const taskToVerify = taskService.getCompletedTask();
    this.setState({ taskToVerify }); // "verify" page
  }
  handleSubmitVerificaion = () => {
    // completedTaskWithVerification.verification.push(new verification)
    // taskService.save({ completedTaskWithVerification });
  };
  showNext() {}
  render() {
    return (
      <>
        <StepsContainer>
          <h1>Align The Tiles</h1>
          <Step>
            {/* {[1, 2, 3].map(i => (
              <StepElement>{i}</StepElement>
            ))} */}
            {[steps].map((step, i) => (
              <StepElement>{step[i]}</StepElement>
            ))}
            <Separator></Separator>
            <p>Finished?</p>
            <p>Click NEXT to get more instructions:</p>
            <ButtonContainer>
              <ActiveButton onClick={this.showNext}>Next</ActiveButton>
              <InactiveButton>Done</InactiveButton>
            </ButtonContainer>
          </Step>
        </StepsContainer>
        <BoardContainer>
          <ColorPicker
            passColorToParent={this.setColor}
            currentColor={this.state.currentColor}
          />
          <EmptyBoard
            currentColor={this.state.currentColor} // Pass color to Board
          />
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
