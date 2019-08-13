import React from "react";
import styled from "styled-components";

const PageTitle = ({ title }) => {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
};

const Title = styled.h1`
  font-size: 2em;
  letter-spacing: 3px;
  text-align: center;
  color: #222;
`;
const Container = styled.section`
  padding: 10px;
  margin: 10px;
`;

export default PageTitle;
