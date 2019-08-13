import React, { Component } from "react";
import styled from "styled-components";
import "./App.css";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Grid from "./components/Grid";
import TextField from "./components/TextField";

const App = () => {
  return (
    <div className="App">
      <Container>
        <Header />
        <Content>
          <GridContainer>
            <h1>Here's a drawing</h1>
            <Grid />
          </GridContainer>
          <TextFieldContainer>
            <h1>Instructions to the user</h1>
            <TextField>Input</TextField>
          </TextFieldContainer>
        </Content>
        <Footer />
      </Container>
    </div>
  );
};

export default App;

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: #e0e0e0;
  display: flex;
  flex-direction: column;
`;
const Content = styled.div`
  display: flex;
  align-self: center;
`;
const ElementContainer = styled.div`
  margin: 2em;
  background-color: white;
  width: 45vw;
  max-height: 80vh;
`;
const TextFieldContainer = styled(ElementContainer)``;
const GridContainer = styled(ElementContainer)``;
