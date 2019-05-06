import React from "react";
import { Spring } from "react-spring/renderprops";
import styled from "styled-components";
import Layout from "../components/layout";
import {
  SubHeader,
  SubpageContainer,
  MainContent,
  SideItem,
} from "../imports/StyledComponents";

const Side = styled.div`
  margin: 0 auto;
  max-width: 90%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(auto, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 5px;
  margin-bottom: 60px;
`;

const services = [
  {
    id: "Vastaanottotoiminta",
    items: [
      "Hoitokeskus 1,2,3,4, tähystysyksiköt, tules, pehmyt, iho, keuhko, neuro, knk, kuuloyksikkö, syöpätautien pkl",
      "Hoitokeskus Erikoispkl palvelusihteerit (POKS)",
      "Dialyysi, sis.pkl",
      "Sädehoitoyksikkö",
      "Aikuisten poliklinikat",
      "Erikoispkl, palvelusihteerit",
      "Terveyskioski",
      "Hamina+kiirevastaanotto",
      "Muut alueelliset vastaanotot",
    ],
  },
  {
    id: "Kuntoutuspalvelut",
    items: [
      "Avokuntoutus",
      "Kotikuntoutus",
      "Apuvälineet",
      "Kuntoutus- ja kipupkl",
      "Sairaala, kuntoutuspalvelut",
      "Laitoskuntoutus",
      "Hoiku",
    ],
  },
  {
    id: "Suun terveydenhuolto",
    items: [
      "Kotka",
      "Kouvola",
      "Miehikkälä Virolahti",
      "Pyhtää",
      "Suun terveydenhuollon vaativa sekä erikoishoito vastaanotoilla ja erikoissairaanhoidossa",
    ],
  },
];

// const services = [
//   'Aikuissosiaalityö',
//   'Terveyssosiaalityö Sosiaali- ja kriisipäivystys',
//   'Maahanmuutopalvelut',
//   'Vammaispalvelut',
//   'Työ- ja päivätoiminta',
//   'Tulkkauspalvelut',
//   'Työelämäpalvelut',
// ];
const Vastaanottojakuntoutus = () => (
  <Layout>
    <SubpageContainer>
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ tension: 40, friction: 20 }}
      >
        {styles => (
          <SubHeader style={styles}>
            <MainContent>
              <h2> Vastaanotto- ja kuntoutuspalvelut </h2>
            </MainContent>
          </SubHeader>
        )}
      </Spring>

      <Spring
        from={{ opacity: 0, transform: "translate3d(100%,-30px,0)" }}
        to={{ opacity: 1, transform: "translate3d(0%,-30px,0)" }}
        config={{ delay: 3000 }}
      >
        {styles => (
          <Side style={styles}>
            {services.map(item => (
              <SideItem>
                <h3>{item.id}</h3>

                {item.items.map(i => (
                  <p>{i}</p>
                ))}
              </SideItem>
            ))}
          </Side>
        )}
      </Spring>
    </SubpageContainer>
  </Layout>
);

export default Vastaanottojakuntoutus;
