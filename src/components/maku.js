import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-image: linear-gradient(
    to right top,
    #051937,
    #0c2c54,
    #104172,
    #0f5793,
    #006eb4
  );
  border-top: 15px solid #ccc;
  padding-bottom: 140px;
`;

const MakuHead = styled.div`
  max-width: 950px;
  margin: 0 auto;
  padding: 20px 0;
`;

const MakuMain = styled.div`
  max-width: 850px;
  background-color: #eee;
  margin: 0 auto;
  border-radius: 4px;
  border: 1px solid #666;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
  font-weight: 800;
  color: #222;

  padding: 2em;
  & h2 {
    text-align: center;
    color: #351d5c;
    border-bottom: 2px solid #351d5c;
  }
`;

function Maku() {
  return (
    <Container>
      <MakuHead />
      <MakuMain>
        <h2>Maakuntauudistuksen tilanne </h2>
        <p>
          Valiaikainentoimielin (VATE) jatkaa kokoontumistaan kesäkuulle asti,
          väliaikainen yhteistoimintaelin (VYTE) tapaa säännöllisesti.
        </p>
        <p>
          Henkilöstöryhmä ei ole kokoontunut Kymsoten työryhmien kanssa
          samanaikaisesti.
        </p>
      </MakuMain>
    </Container>
  );
}

export default Maku;
