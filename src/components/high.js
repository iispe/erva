import React from "react";
import styled from "styled-components";

const HighHead = styled.div`
  margin: 0 auto;
  padding-top: 25px;
  text-align: center;
  max-width: 350px;
  & h2 {
    color: #351d5c;
    padding-bottom: 5px;
    border-bottom: 5px solid #ef7b5a;
  }
`;

const Container = styled.div`
  background-color: #ddd;
  border: 1px solid #bbb;
  border-radius: 3px;
  margin: 0 auto;
  margin-top: 1.85rem;
  width: 240px;
  padding: 15px 2px;
`;

const TopItem = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 220px;
  background-color: dodgerblue;
  font-weight: 800;
  color: white;
  padding: 12px;
  border-radius: 3px;

  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);

  &:nth-child(2) {
    margin: 15px auto;
  }
`;

const High = () => (
  <>
    <HighHead>
      <h2>ORGANISAATIOKAAVIO</h2>
    </HighHead>
    <Container>
      <TopItem>Valtuusto</TopItem>
      <TopItem>Hallitus</TopItem>
      <TopItem>Toimitusjohtaja</TopItem>
    </Container>
  </>
);

export default High;
