import React from "react";
import styled from "styled-components";

// Components
import HexagonNumberedBoard from "./HexagonNumberedBoard";

const NumberedBoard = () => {
  return (
    <Container>
      <Instructions />
      <HexagonNumberedBoard />
    </Container>
  );
};

export default NumberedBoard;

const Container = styled.div``;
const Instructions = styled.div``;
