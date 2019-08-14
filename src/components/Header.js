import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <Title>Hexagon App</Title>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  min-height: 100px;
  border-bottom: 1px solid #000;
  background: #fafafa;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  padding: 24px;
`;

const Title = styled.div`
  font-size: 36px;
  color: #444;
`;
