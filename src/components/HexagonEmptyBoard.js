import React from "react";
import styled from "styled-components";

const HexagonEmptyBoard = () => {
  let hexagonStyle = {
    fill: "white",
    stroke: "black",
    "stroke-width": "2"
  };

  return (
    <Container>
      <svg viewBox="0 0 1350 770">
        <defs>
          <polygon
            id="hexagon"
            points="50,25 100,25 125,68 100,111 50,111 25,68"
            style={hexagonStyle}
          />
        </defs>
        {[0, 1, 2, 3, 4, 5, 6, 7].map(i => {
          return [0, 2, 4, 6, 8, 10, 12, 14].map(j => {
            return (
              <>
                <use
                  xlinkHref="#hexagon"
                  transform={"translate(" + j * 75 + "," + i * 86 + ")"}
                  // style={{ fill: this.state.colorArray[i] }}
                />
                <use
                  xlinkHref="#hexagon"
                  transform={
                    "translate(" + (j + 1) * 75 + "," + (i * 86 + 43) + ")"
                  }
                />
              </>
            );
          });
        })}
        Sorry, your browser does not support inline SVG.
      </svg>
    </Container>
  );
};

export default HexagonEmptyBoard;

const Container = styled.div`
  margin-left: 2em;
`;
