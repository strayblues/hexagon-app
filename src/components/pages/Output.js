import React from "react";
import styled from "styled-components";

// Components
// import ElementContainer from "../common/ElementContainer";
import Grid from "../Grid";
import ColorPalette from "../common/ColorPalette";
import Button from "../common/Button";

const Output = () => {
  return (
    <>
      <StepsContainer>
        <h1>Task</h1>
        <Step>Show next line of Instructions when user done</Step>
      </StepsContainer>
      <GridContainer>
        <ColorPalette />
        <Grid />
        <StyledButton>Done</StyledButton>
      </GridContainer>
    </>
  );
};

export default Output;

const ElementContainer = styled.div`
  margin: 2em;
  background-color: white;
  width: 45vw;
  max-height: 65vh;
`;
const Step = styled.div``;
const StepsContainer = styled(ElementContainer)``;
const GridContainer = styled(ElementContainer)`
  cursor: pointer;
  display: flex;
  flex-direction: column;
`;
const StyledButton = styled(Button)`
  width: 25%;
  align-self: flex-end;
  background-color: lightseagreen;
`;
