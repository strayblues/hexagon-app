import React, { Component } from "react";
import styled from "styled-components";
import Hexagon from "../components/common/Hexagon";

class HexagonEmptyBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // The hexagon methods currently effect the entite board.
  // They should only effect individual hexagons.

  render() {
    return (
      <Container>
        <svg viewBox="0 0 1350 770">
          {[0, 1, 2, 3, 4, 5, 6, 7].map(i => {
            return [0, 2, 4, 6, 8, 10, 12, 14].map(j => {
              return (
                <>
                  <Hexagon
                    transform={"translate(" + j * 75 + "," + i * 86 + ")"}
                  />
                  <Hexagon
                    transform={
                      "translate(" + (j + 1) * 75 + "," + (i * 86 + 43) + ")"
                    }
                  />
                </>
              );
            });
          })}
        </svg>
      </Container>
    );
  }
}

export default HexagonEmptyBoard;

const Container = styled.div`
  margin-left: 2em;
  min-width: 0;
  min-height: 0;
`;
