import React, { Component } from "react";
import styled from "styled-components";

class HexagonEmptyBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hexagonStyle: {
        fill: "white",
        stroke: "black",
        "stroke-width": "2"
      }
    };
  }

  handleClick = e => {
    this.setState({
      hexagonStyle: {
        fill: "red"
      }
    });
  };

  render() {
    return (
      <Container>
        <svg viewBox="0 0 1350 770">
          <defs>
            <polygon
              id="hexagon"
              points="50,25 100,25 125,68 100,111 50,111 25,68"
              style={this.state.hexagonStyle}
            />
          </defs>
          {[0, 1, 2, 3, 4, 5, 6, 7].map(i => {
            return [0, 2, 4, 6, 8, 10, 12, 14].map(j => {
              return (
                <>
                  <use
                    onClick="handleClick"
                    xlinkHref="#hexagon"
                    transform={"translate(" + j * 75 + "," + i * 86 + ")"}
                  />
                  <use
                    onClick="handleClick"
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
  }
}

export default HexagonEmptyBoard;

const Container = styled.div`
  margin-left: 2em;
`;
