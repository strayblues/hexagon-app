import React, { Component } from "react";
import styled from "styled-components";

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "pink",
      isToggleOn: true
    };

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
        <Yellow onClick={this.handleClick} />
        <Green onClick={this.handleClick} />
        <Red onClick={this.handleClick}>
          {this.state.isToggleOn ? "ON" : "OFF"}
        </Red>
        <Black onClick={this.handleClick} />
        <Blue onClick={this.handleClick} />
        <Violet onClick={this.handleClick} />
        <Orange onClick={this.handleClick} />
        <Clear onClick={this.handleClick} />
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
const Violet = styled(Color)`
  background: violet;
`;
const Black = styled(Color)`
  background: black;
`;
const Orange = styled(Color)`
  background: orange;
`;
const Clear = styled(Color)`
  background: white;
  border-radius: 0%;
`;
