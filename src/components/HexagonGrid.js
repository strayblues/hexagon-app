import React from "react";
import styled from "styled-components";

const HexagonGrid = () => {
  let hexagonStyle = {
    fill: "lime",
    stroke: "purple",
    "stroke-width": "1"
  };

  return (
    <Container>
      <svg height="210" width="500">
        <polygon
          points="50,25 100,25 125,68 100,111 50,111 25,68"
          style={hexagonStyle}
        />
        Sorry, your browser does not support inline SVG.
      </svg>
      {/* <svg width={window.innerWidth} height={window.innerHeight} />; */}
    </Container>
  );
};

export default HexagonGrid;

const Container = styled.div``;
