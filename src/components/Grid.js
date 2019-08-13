import React from "react";
import styled from "styled-components";

// Components
import HexagonGrid from "./HexagonGrid";

const Grid = () => {
  return (
    <Container>
      <Instructions />
      <HexagonGrid />
    </Container>
  );
};

export default Grid;

const Container = styled.div``;
const Instructions = styled.div``;
