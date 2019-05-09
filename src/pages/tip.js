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
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(auto, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 5px;
  margin-bottom: 60px;
`;

const services = [
  {
    id: "Asiakas- ja palveluohjaus",
    items: [],
  },
  {
    id: "Varhaisen tuen palvelut",
    items: [
      "Gerontologinen sosiaalityö ja ennaltaehkäisevät palvelut",
      "Omaishoidon yksikkö",
      "Geriatrinen ja gerontologinen osaamiskeskus",
    ],
  },
  {
    id: "Kotihoito ja kotihoidon tukipalvelut",
    items: ["Alueet A, B, C, D ja E, Tukipalvelut, Veteraanipalvelut"],
  },
  {
    id: "Asumispalvelut",
    items: ["Alueet A, B, C, D ja E"],
  },
];

const Tip = () => (
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
              <h2> Koti-, asumis- ja hoivapalvelut </h2>
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

export default Tip;
