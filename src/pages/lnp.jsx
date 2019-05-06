import React from 'react';
import { Spring } from 'react-spring/renderprops';
import styled from 'styled-components';
import Layout from '../components/layout';
import { SubHeader } from '../imports/StyledComponents';

const SubpageContainer = styled.div``;

const MainContent = styled.div`
  padding: 40px;
  padding-top: 40px;
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
const Side = styled.div`
  margin: 0 auto;
  max-width: 90%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(auto, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 5px;

  transform: translateY(-30px);
  margin-bottom: 60px;
`;
const SideItem = styled.div`
  background-color: #eee;

  border-radius: 5px;

  border-bottom: 4px solid #c34965;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
  color: #111;
  text-align: center;
  font-family: "tahoma";
  font-weight: 600;
  text-transform: uppercase;

  padding: 1em;
  & h3 {
    color: #842a68;
    padding-bottom: 10px;
    border-bottom: 5px solid #c34965;
  }
`;

const services = [
  {
    id: 'Varhaisen tuen palvelut',
    items: [
      'Perheiden sosiaalipalvelut ja kuntoutus',
      'Lasten ja nuorten kehitykselliset palvelut sekä perheoikeudelliset palvelut',
      'Lasten ja nuorten ehkäisevät terveyspalvelut',
      'Kotiin vietävät palvelut',
    ],
  },
  {
    id: 'Erityistason palvelut',
    items: [
      'Careakoulu',
      'Lastensuojelu',
      'Lastensuojelulaitokset',
      'Lasten erikoissairaanhoidon palvelut',
    ],
  },
];

// const services = [
//   'Perheiden sosiaalipalvelut ja kuntoutus',
//   'Lasten ja nuorten kehitykselliset palvelut sekä perheoikeudelliset palvelut',
//   'Lasten ja nuorten ehkäisevät terveyspalvelut',
//   'Kotiin vietävät palvelut',
//   'Careakoulu',
//   'Lastensuojelu',
//   'Lastensuojelulaitokset',
//   'Lasten erikoissairaanhoidon palvelut',
// ];
const Lnp = () => (
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
              <h2> Lasten, nuorten ja perheiden palvelut </h2>
              <p>
                Lasten, nuorten ja perheiden palvelut tukevat perheiden omia
                voimavaroja, auttavat vanhempia jaksamisessa ja varmistavat
                lapsille turvalliset olosuhteet kasvaa ja kehittyä. Palvelut
                ovat perheiden tukena, jotta kymenlaaksolaiset perheet voisivat
                hyvin, ja ongelmatilanteissa perheitä ja yksilöitä voitaisiin
                auttaa mahdollisimman varhaisessa vaiheessa.
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

export default Lnp;
