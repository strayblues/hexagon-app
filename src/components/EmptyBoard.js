import React from "react";
import styled from "styled-components";

// Components
import HexagonEmptyBoard from "./HexagonEmptyBoard";

const EmptyBoard = props => {
  return (
    <Container>
      <Instructions />
      <HexagonEmptyBoard />
    </Container>
  );
};

export default EmptyBoard;

const Container = styled.div``;
const Instructions = styled.div``;
