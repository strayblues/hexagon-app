import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import "./App.css";

// components
import Home from "./components/pages/Home";
import Align from "./components/pages/Align";
import Verify from "./components/pages/Verify";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Container>
          {/* <Navbar />
          <Header /> */}
          <Content>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/describe" exact component={Home} />
              <Route path="/align" exact component={Align} />

              {/* Verify will be a separate app that gets its output
              from previous user inputs */}
              <Route path="/verify" exact component={Verify} />
            </Switch>
          </Content>
          {/* <Footer /> */}
        </Container>
      </Router>
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
