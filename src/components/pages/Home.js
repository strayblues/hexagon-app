import React from "react";
// import PageTitle from "../common/PageTitle";
import styled from "styled-components";

// Components
import Grid from "../Grid";
import TextField from "../TextField";

const Home = () => {
  return (
    <>
      {/* <PageTitle title="Write instructions for drawing the hexagon pattern" /> */}
      <GridContainer>
        <h1>Here's a drawing</h1>
        <Grid />
      </GridContainer>
      <TextFieldContainer>
        <h1>Instructions to the user</h1>
        <TextField>Input</TextField>
      </TextFieldContainer>
    </>
  );
};

export default Home;

const ElementContainer = styled.div`
  margin: 2em;
  background-color: white;
  width: 45vw;
  max-height: 60vh;
`;
const TextFieldContainer = styled(ElementContainer)`
  overflow: scroll;
`;
const GridContainer = styled(ElementContainer)``;
