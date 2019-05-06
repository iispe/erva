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
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(auto, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 5px;
  margin-bottom: 60px;
`;

const services = [
  {
    id: 'Aikuisten sosiaalipalvelut ja työ- ja päivätoiminta',
    items: [
      'Aikuissosiaalityö',
      'Terveyssosiaalityö Sosiaali- ja kriisipäivystys',
      'Maahanmuutopalvelut',
      'Vammaispalvelut',
      'Työ- ja päivätoiminta',
      'Tulkkauspalvelut',
    ],
  },
  {
    id: 'Työelämäpalvelut',
    items: ['Työelämäpalvelut'],
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
const Aikuistenmoniala = () => (
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
              <h2> Aikuisten sosiaalipalvelut ja työelämäpalvelut </h2>
              <p>
                Aikuisille suunnattujen sosiaali- ja työelämäpalveluiden
                tehtävänä on edistää ja ylläpitää asukkaiden ja yhteisöjen
                hyvinvointia ja terveyttä sekä sosiaalista turvallisuutta ja
                toimintakykyä. Tähän pyritään järjestämällä ja tuottamalla
                tarpeen mukaisia ja vaikuttavia palveluja, vahvistamalla
                osallisuutta ja kehittämällä sosiaalisia oloja sekä takaamalla
                asukkaille riittävä toimeentuloturva.
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

export default Aikuistenmoniala;
