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
      <svg viewBox="0 0 1500 1500">
        <defs>
          <polygon
            id="hexagon"
            points="50,25 100,25 125,68 100,111 50,111 25,68"
            style={hexagonStyle}
          />
        </defs>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((object, i) => (
          <use xlinkHref="#hexagon" transform={"translate(0," + i * 86 + ")"} />
        ))}
        {[1, 2, 3, 4, 5, 6, 7, 8].map((object, i) => (
          <use
            xlinkHref="#hexagon"
            transform={"translate(75," + (i * 86 + 43) + ")"}
          />
        ))}
        {/* <use xlinkHref="#hexagon" transform="translate(0, 86)" />
        <use xlinkHref="#hexagon" transform="translate(0, 172)" />
        <use xlinkHref="#hexagon" transform="translate(0, 258)" /> */}
        <use xlinkHref="#hexagon" transform="translate(75, 43)" />
        <use xlinkHref="#hexagon" transform="translate(75, 129)" />
        <use xlinkHref="#hexagon" transform="translate(75, 215)" />
        <use xlinkHref="#hexagon" transform="translate(75, 301)" />
        <use xlinkHref="#hexagon" transform="translate(150, 0)" />
        <use xlinkHref="#hexagon" transform="translate(150, 86)" />
        <use xlinkHref="#hexagon" transform="translate(225, 43)" />
        <use xlinkHref="#hexagon" transform="translate(225, 129)" />
        <use xlinkHref="#hexagon" transform="translate(300, 86)" />
        Sorry, your browser does not support inline SVG.
      </svg>
    </Container>
  );
};

export default HexagonGrid;

const Container = styled.div``;
