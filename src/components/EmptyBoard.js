import React, { Component } from "react";
import styled from "styled-components";
import Hexagon from "./common/Hexagon";

class EmptyBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <svg viewBox="0 0 1350 950">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => {
            return [0, 2, 4, 6, 8, 10, 12, 14].map(j => {
              return (
                <>
                  <Hexagon
                    currentColor={this.props.currentColor}
                    transform={"translate(" + j * 75 + "," + i * 86 + ")"}
                  />
                  <Hexagon
                    currentColor={this.props.currentColor}
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

export default EmptyBoard;

const Container = styled.div`
  margin-left: 2em;
`;
