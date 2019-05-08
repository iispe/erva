import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #e3e3e3;
  //   background-image: linear-gradient(
  //     to right top,
  //     #051937,
  //     #0c2c54,
  //     #104172,
  //     #0f5793,
  //     #006eb4
  //   );
  border-top: 15px solid #ccc;
  padding-bottom: 100px;
  font-size: 1.2rem;
`;

const MakuHead = styled.div`
  max-width: 950px;
  margin: 0 auto;
  padding: 20px 0;
`;

const MakuMain = styled.div`
  max-width: 850px;
  background-color: #eee;
  margin: 60px auto;
  border-radius: 4px;
  //   border: 1px solid #666;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);

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
      <MakuMain>
        <h2>Maakuntauudistuksen tilanne </h2>
        <p>
          Maakunta- ja sote -uudistuksen toimeenpanon valmistelu on lopetettu.
          Jäljellä oleva työ suunnataan valmistelun päättämiseen, tehdyn työn
          dokumentointiin ja uudistuksen hallittuun alasajoon kesäkuun 2019
          loppuun mennessä. Poikkeuksena ICT-valmistelu, joka päättyy joulukuun
          2019 loppuun mennessä.
        </p>
        <p>
          Valiaikainen toimielin (VATE) jatkaa kokoontumistaan kesäkuulle asti.
        </p>
      </MakuMain>
    </Container>
  );
}

export default Maku;
