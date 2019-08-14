import React, { Component } from "react";
import styled from "styled-components";

class ColorPalette extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <Container>
        <Red onClick={this.handleClick}>
          {this.state.isToggleOn ? "ON" : "OFF"}
        </Red>
        <Yellow onClick={this.handleClick} />
        <Green onClick={this.handleClick} />
        <Blue onClick={this.handleClick} />
      </Container>
    );
  }
}

export default ColorPalette;

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
  width: 40px;
  height: 40px;
  margin: 0 7px;
  border-radius: 50%;
  border: 1px solid black;
  background: pink;
  outline: none;
  transition: all 300ms;

  &:hover {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
  }
`;
const Red = styled(Color)`
  background: crimson;
`;
const Yellow = styled(Color)`
  background: gold;
`;
const Green = styled(Color)`
  background: limegreen;
`;
const Blue = styled(Color)`
  background: dodgerblue;
`;
