import React, { Component } from "react";
import styled from "styled-components";
import taskService from "../../services/taskService";
// import tasks from "../../data/tasks";

// Mock data
// import jsonResponse from "../../data/tasks";

// Components
import EmptyBoard from "../EmptyBoard";
import ColorPicker from "../common/ColorPicker";
import Button from "../common/Button";

// fetch("../../data/tasks.json")
//   .then(res => res.json())
//   .then(data => {
//     console.log("data:", data);
//     console.log("data:", data);
//   });

const mockData = {
  tasks: [
    {
      image: {
        _id: "1",
        src: "cat1.jpg"
      },
      inputs: ["Line 1", "Line 2", "Line 3", "Line 4"],
      verifications: []
    },
    {
      image: {
        _id: "2",
        src: "cat2.jpg"
      },
      inputs: ["Line 1", "Line 2", "Line 3", "Line 4"],
      verifications: []
    }
  ]
};

const steps = mockData.tasks[0].inputs; // array
const currentStep = steps[0];

class Align extends Component {
  state = {
    taskIndex: 0,
    stepIndex: 0
  };
  // advancSteps(steps) {
  //   this.setState(...currentStep);
  // }
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
