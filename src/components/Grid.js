import React from "react";
import styled from "styled-components";

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
const HexagonGrid = styled.div``;
