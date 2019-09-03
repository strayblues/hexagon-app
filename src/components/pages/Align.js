import React, { Component } from "react";
import styled from "styled-components";
import taskService from "../../services/taskService";

// Components
import NumberedBoard from "../NumberedBoard";
import ColorPicker from "../common/ColorPicker";
import Button from "../common/Button";

class Align extends Component {
  state = {
    currentColor: "white",
    currentStep: "",
    taskIdx: 0,
    tasks: [
      {
        image: {
          _id: "1",
          src: "cat1.jpg"
        },
        description: [
          "Line 1 of task 1",
          "Line 2  1 of task 1",
          "Line 3  1 of task 1",
          "Line 4  1 of task 1"
        ],
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
  showNextLine = props => {
    this.setState({
      currentStep: this.state.tasks[0].description[this.state.taskIdx],
      taskIdx: this.taskIdx + 1
    });
    // alert("current step is: " + this.state.currentStep);
  };
  render() {
    return (
      <>
        <StepsContainer>
          <h1>Align The Tiles</h1>
          <Step>
            <StepElement>{this.state.currentStep}</StepElement>
            <Separator></Separator>
            <ButtonContainer>
              <NextButton onClick={this.showNextLine}>Next</NextButton>
              <DoneButton>Done</DoneButton>
            </ButtonContainer>
          </Step>
        </StepsContainer>
        <BoardContainer>
          <ColorPicker
            passColorToParent={this.setColor}
            currentColor={this.state.currentColor}
          />
          <NumberedBoard
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
const NextButton = styled(Button)`
  background-color: blue;
  width: 20%;
`;
const DoneButton = styled(Button)`
  background-color: #aaa;
  width: 20%;
  &:hover {
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0);
  }
`;
const Separator = styled.hr`
  margin: 0 1em;
`;
