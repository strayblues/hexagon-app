import React, { Component } from "react";
import styled from "styled-components";
import Button from "./Button";

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = e => {
    this.props.passColorToParent(e.target.attributes.color.value);
  };

  render() {
    return (
      <Container>
        {[
          "gold",
          "limegreen",
          "crimson",
          "black",
          "dodgerblue",
          "violet",
          "orange",
          "white"
        ].map(color => (
          <Color
            color={color}
            selected={color === this.props.currentColor}
            onClick={this.handleClick}
          />
        ))}
        <CurrentColor color={this.props.currentColor} />
      </Container>
    );
  }
}

export default ColorPicker;

const Container = styled.div`
  align-self: center;
  height: 60px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  transition: all 300ms;
  border-radius: 4px;
  cursor: pointer;
`;
const Color = styled.button`
  background: ${props => props.color};
  width: 3em;
  height: 3em;
  margin: 0 0.5em;
  border-radius: 50%;
  border: 1px solid black;
  outline: none;
  box-shadow: ${props =>
    props.selected ? "0 5px 10px rgba(0, 0, 0, 0.8)" : ""};
  transition: all 300ms;
  &:hover {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.8);
  }
`;
const CurrentColor = styled(Color)`
  width: 1.5em;
  height: 1.5em;
  margin-left: 2em;
`;
