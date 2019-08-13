import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Divider />
      <Info>Hexagon App</Info>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  width: 500px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Divider = styled.div`
  width: 500px;
  height: 1px;
  background: #444;
  margin: 20px 0;
`;

const Info = styled.div`
  color: #444;
  font-size: 18px;
  align-self: flex-end;
`;
