import React from "react";
import styled from "styled-components";
import Button from "../common/Button";

// Components
// import ElementContainer from "../common/ElementContainer";
import Grid from "../Grid";
import TextField from "../TextField";

const Home = () => {
  return (
    <>
      <GridContainer>
        <h1>Here's a drawing</h1>
        <Grid />
      </GridContainer>
      <TextFieldContainer>
        <h1>Instructions to the user</h1>
        <InputContainer>
          <TextField />
        </InputContainer>
        <StyledButton>Send</StyledButton>
      </TextFieldContainer>
    </>
  );
};

export default Home;
const ElementContainer = styled.div`
  margin: 2em;
  background-color: white;
  width: 45vw;
  max-height: 65vh;
  overflow: scroll;
`;
const InputContainer = styled(ElementContainer)`
  max-height: 53vh;
  border-radius: 4px;
  transition: all 300ms;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0);
  cursor: pointer;

  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;
const GridContainer = styled(ElementContainer)``;
const StyledButton = styled(Button)`
  width: 25%;
  /* align-self: right; */
  background-color: lightseagreen;
`;
const TextFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
