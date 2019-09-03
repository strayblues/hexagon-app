import React, { Component } from "react";
import styled from "styled-components";

class Step extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        {["step1", "step2", "step3"].map(step => (
          <Step
            step={step}
            completed={step === this.props.currentStep}
            onClick={this.handleClick}
          />
        ))}
        <CurrentStep step={this.props.currentStep} />
      </Container>
    );
  }
}

export default Step;

const Container = styled.div`
  margin: 2em;
  background-color: lightblue;
  padding: 0.5em;
  border-radius: 4px;
`;
const CurrentStep = styled.div``;
