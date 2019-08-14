import React from "react";
import styled from "styled-components";

// Components
// import ElementContainer from "../common/ElementContainer";
import Grid from "../Grid";
import ColorPalette from "../common/ColorPalette";

const Output = () => {
  return (
    <>
      <StepsContainer>
        <h1>Instructions to the user for drawing</h1>
        <Step>Show next line of Instructions when user done</Step>
      </StepsContainer>

      <GridContainer>
        <ColorPalette />
        <Grid />
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
`;
