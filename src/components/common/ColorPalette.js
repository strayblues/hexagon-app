import React from "react";
import styled from "styled-components";

const ColorPalette = () => {
  return (
    <Container>
      {["red", "green", "yellow", "blue"].map((a, i) => (
        <Color background={i} />
      ))}
    </Container>
  );
};

export default ColorPalette;

const Container = styled.div`
  align-self: center;
  height: 60px;
  background: #bdbdbd;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  transition: all 300ms;
  border-radius: 4px;
  cursor: pointer;
`;
const Color = styled.div`
  width: 40px;
  height: 40px;
  margin: 0 7px;
  border-radius: 50%;
  border: 1px solid black;
  background: pink;
`;
