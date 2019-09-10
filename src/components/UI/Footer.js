import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Divider />
      <Info>© ONLP Lab 2019</Info>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  width: 500px;
  margin: 1em auto;
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
