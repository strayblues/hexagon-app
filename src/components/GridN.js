import React from "react";
import styled from "styled-components";

// Components
import HexagonGridN from "./HexagonGridN";

const GridN = () => {
  return (
    <Container>
      <Instructions />
      <HexagonGridN />
    </Container>
  );
};

export default GridN;

const Container = styled.div``;
const Instructions = styled.div``;
