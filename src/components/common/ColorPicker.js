import React, { Component } from "react";
import styled from "styled-components";

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentColor: "pink"
    };
  }

  handleClick = e => {
    this.setState({
      currentColor: e.target.attributes.color.value
    });
  };

  render() {
    return (
      <Container>
        <Color color="gold" onClick={this.handleClick} />
        <Color color="limegreen" onClick={this.handleClick} />
        <Color color="crimson" onClick={this.handleClick} />
        <Color color="black" onClick={this.handleClick} />
        <Color color="dodgerblue" onClick={this.handleClick} />
        <Color color="violet" onClick={this.handleClick} />
        <Color color="orange" onClick={this.handleClick} />
        <Clear color="white" onClick={this.handleClick} />
        <CurrentColor color={this.state.currentColor} />
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
  transition: all 300ms;

  &:hover {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
  }
`;
const Clear = styled(Color)`
  border-radius: 0%;
`;
const CurrentColor = styled(Color)`
  border-radius: 0%;
`;
