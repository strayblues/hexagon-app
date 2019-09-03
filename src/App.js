import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import "./App.css";

// components
import Describe from "./components/pages/Describe";
import Align from "./components/pages/Align";
import AlignDone from "./components/pages/AlignDone";
import Verify from "./components/pages/Verify";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Container>
          <Navbar />
          {/* <Header /> */}
          <Content>
            <Switch>
              <Route exact path="/" component={Describe} />
              <Route path="/describe" exact component={Describe} />
              <Route path="/align" exact component={Align} />
              <Route path="/align-done" exact component={AlignDone} />
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
