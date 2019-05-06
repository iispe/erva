import React from 'react';
import { Spring } from 'react-spring/renderprops';
import styled from 'styled-components';
import Layout from '../components/layout';
import {
  SubHeader,
  SubpageContainer,
  MainContent,
  SideItem,
} from '../imports/StyledComponents';

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
    id: 'Ensihoito-, päivystys-, tekstinkäsittely ja varahenkilöstöpalvelut',
    items: ['Ensihoitopalvelut', 'Päivystyspalvelut', 'Varahenkilöstöpalvelut'],
  },
  {
    id: 'Toimenpidekeskuspalvelut',
    items: [
      'Leikkaustoiminta',
      'Teho- ja valvontahoito ja sydänkeskus',
      'Silmäkeskus',
      'Synnytys- ja naistentautien palvelut',
      'Välinehuoltopalvelut',
      'Tartuntataudit ja infektioiden torjunta',
    ],
  },
  {
    id: 'Osastopalvelut',
    items: [
      'Operatiivinen osastohoito',
      'Medisiininen osastohoito',
      'Kuntouttava osastohoito POKS A',
      'Kuntouttava osasastohoito POKS B',
      'Kuntouttava osastohoito Hamina-Kotka',
      'Kotisairaala',
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
const Sairaala = () => (
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
              <h2> Terveys- ja sairaalapalvelut </h2>
              <p>
                Laadukkaat ja helposti tavoitettavat terveyden ja sairaanhoidon
                palvelut ovat jokaisen kymenlaaksolaisen oikeus. Alueen
                asukkaiden terveyttä ja hyvinvointia edistetään saumattomalla
                palveluketjulla ennaltaehkäisevästä terveydenhoidosta
                perusterveydenhoitoon ja erikoissairaanhoitoon. Lähtökohtana on
                turvata asiakkaiden hoitoon pääsy ja korkeatasoinen,
                tarpeenmukainen hoito.
              </p>
            </MainContent>
          </SubHeader>
        )}
      </Spring>
      <Spring
        from={{ opacity: 0, transform: 'translate3d(100%,-30px,0)' }}
        to={{ opacity: 1, transform: 'translate3d(0%,-30px,0)' }}
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

export default Sairaala;
