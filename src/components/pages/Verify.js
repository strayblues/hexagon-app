import React, { Component } from "react";
import styled from "styled-components";
import taskService from "../../services/taskService";

// Components
// import ElementContainer from "../common/ElementContainer";
import GridN from "../GridN";
import ColorPalette from "../common/ColorPalette";
import Button from "../common/Button";

class Verify extends Component {
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
          <h1>Verification Task</h1>
          <Step>
            <StepElement>
              Show next line when user clicks next. In the end the "Next" button
              is replaced with "Done". Location of Next/Done buttons may
              change."
            </StepElement>
            <NextButton>Next</NextButton>
          </Step>
        </StepsContainer>
        <GridContainer>
          <ColorPalette />
          <GridN />
          {/* <DoneButton>Done</DoneButton> */}
        </GridContainer>
      </>
    );
  }
}

export default Verify;

const ElementContainer = styled.div`
  margin: 2em;
  background-color: white;
  width: 45vw;
  max-height: 65vh;
`;
const Step = styled.div`
  display: flex;
`;
const StepsContainer = styled(ElementContainer)``;
const StepElement = styled(ElementContainer)`
  background-color: lightblue;
  padding: 0.5em;
  border-radius: 4px;
`;
const GridContainer = styled(ElementContainer)`
  cursor: pointer;
  display: flex;
  flex-direction: column;
`;
const DoneButton = styled(Button)`
  width: 25%;
  align-self: flex-end;
  background-color: lightseagreen;
`;
const NextButton = styled(Button)`
  background-color: blue;
  width: 30%;
  margin-right: 3em;
`;
