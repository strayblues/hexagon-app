import React, { Component } from "react";
import styled from "styled-components";
import "./App.css";

// Components
// components
import Grid from "./components/Grid";
import TextField from "./components/TextField";
// import Footer from './components/Footer';

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
  margin-top: 5em;
  align-self: center;
`;
const Header = styled.div``;

const ElementContainer = styled.div`
  margin: 5em;
  background-color: white;
  width: 28em;
  height: 22em;
`;
const TextFieldContainer = styled(ElementContainer)``;
const GridContainer = styled(ElementContainer)``;

const Footer = styled.div``;
