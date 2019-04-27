import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import High from '../components/high';
import Org from '../components/org';

const Hero = styled.div`
  background-color: midnightblue;
  border-top: 5px solid steelblue;
  border-bottom: 12px solid lightgray;
  padding-bottom: 20px;
`;

const MainContent = styled.div`
  padding: 20px;
  padding-top: 60px;
  font-size: 1.3rem;
  font-weight: 800;
  color: #eee;
  margin: 0 auto;
  line-height: 1.4em;
  max-width: 960px;

  & h2 {
    font-size: 1.4em;
    border-bottom: 3px solid white;
    text-transform: uppercase;
  }
`;
const IndexPage = () => (
  <Layout>
    <Hero>
      <MainContent>
        <p>
          Kymenlaakson sosiaali- ja terveyspalvelujen kuntayhtymä Kymsote
          aloitti toimintansa 1.1.2019. Kymsoten tehtävänä on järjestää ja
          tuottaa kaikille maakunnan asukkaille yhdenvertaiset ja helposti
          saavutettavat sote-palvelut.
        </p>
        <p>
          Kymsote tavoittelee toiminnassaan parasta asiakaskokemusta ja panostaa
          ennaltaehkäiseviin, laadukkaisiin ja kustannustehokkaisiin
          palveluihin. Kymsote on tulevaisuuden toimija, jonka tavoite on, että
          kymenlaaksolaiset ovat aktiivisia, hyvinvoivia ja toimintakykyisiä eri
          elämäntilanteissa.
        </p>
        <p>
          Kuntayhtymän jäsenkuntia ovat Hamina, Kotka, Kouvola, Miehikkälä,
          Pyhtää ja Virolahti. Kymsote työllistää yli 5 000 eri alojen
          ammattilaista, jotka palvelevat 170 000 maakunnan asukasta.
        </p>
      </MainContent>
    </Hero>
    <High />
    <Org />
  </Layout>
);

export default IndexPage;
