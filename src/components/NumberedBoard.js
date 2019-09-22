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
        <svg viewBox="0 0 1080 750">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(i => {
            return [0, 1, 2, 3].map(j => {
              return (
                <>
                  <Hexagon
                    number={i + j * 32 + 1}
                    currentColor={this.props.currentColor}
                    transform={"translate(" + 60 * i + "," + 100 * j + ")"}
                  />
                  <Hexagon
                    number={i + j * 32 + 17}
                    currentColor={this.props.currentColor}
                    transform={
                      "translate(" + (60 * i + 30) + "," + (j * 100 + 50) + ")"
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
  margin-left: -1em;
`;
