import React from "react";
import styled from "styled-components";

// Components
// import PageTitle from "../common/PageTitle";
import Grid from "../Grid";

const Output = () => {
  return (
    <>
      {/* <PageTitle title="Color the hexagons as instructed" /> */}

      <StepsContainer>
        <h1>Instructions to the user for drawing</h1>
        <Step>Show next line of Instructions when user done</Step>
      </StepsContainer>

      <GridContainer>
        <h1>Color the hexagons as instructed</h1>
        <Grid />
      </GridContainer>
    </>
  );
};

export default Output;

const StepsContainer = styled.div``;
const Step = styled.div``;
const ElementContainer = styled.div`
  margin: 2em;
  background-color: white;
  width: 45vw;
  max-height: 60vh;
`;
const GridContainer = styled(ElementContainer)``;
