import React from "react";
import styled from "styled-components";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Container>
        <Content>
          <Header />
          <Sidebar />
          <Grid>
            <svg height="210" width="500">
              <polygon
                points="150,10 100,40 100,90 150,120 200,90 200,40"
                style="fill:lime;stroke:purple;stroke-width:1"
              />
              Sorry, your browser does not support inline SVG.
            </svg>
          </Grid>
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
  flex: 1 0 auto;
`;
const Header = styled.div``;
const Sidebar = styled.div``;
const Grid = styled.div``;
const Footer = styled.div``;
