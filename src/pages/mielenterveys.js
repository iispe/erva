import React from "react"
import { Spring } from "react-spring/renderprops"
import styled from "styled-components"
import Layout from "../components/layout"

const StyledH1 = styled.h1`
  color: white;
  background-color: royalblue;
  padding: 15px;
  text-align: center;
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
`
const SubHeader = styled.div`
  background-color: midnightblue;
  padding-bottom: 20px;
`
const SubpageContainer = styled.div`
  border-top: 5px solid steelblue;
`

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
`
const Side = styled.div`
  margin: 0 auto;
  max-width: 90%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(auto, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 5px;

  transform: translateY(-30px);
  margin-bottom: 60px;
`
const SideItem = styled.p`
  background-color: #008dae;
  place-items: stretch;
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
  color: #eee;
  text-align: center;
  font-family: "tahoma";
  text-transform: uppercase;
  font-weight: 800;
  padding: 1em;
`

const services = [
  "Terveysasemien mielenterveys- ja päihdepalvelut",
  "Akuuttipalvelut",
  "Psykiatrinen osastohoito",
  "Nuorisopsykiatrian poliklinikka ja osasto",
  "Mielenterveys- ja päihdepoliklinikat",
  "Mielenterveys- ja päihdekuntoutujien asumispalvelut",
  "Selviämis- ja vieroitushoito",
  "Korvaushoito ja sosiaali- ja terveysneuvonta",
  "Yleissairaalapsykiatrian poliklinikka",
]
const Mielenterveys = () => (
  <Layout>
    {/* <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ tension: 30, friction: 10 }}
    >
      {styles => (
        <StyledH1 style={styles}>Mielenterveys- ja päihdepalvelut</StyledH1>
      )}
    </Spring> */}
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ tension: 40, friction: 20 }}
    >
      {styles => (
        <SubpageContainer style={styles}>
          <SubHeader>
            <MainContent>
              <h2>Mielenterveys- ja päihdepalvelut</h2>
              <p>
                Tarjoavat tutkimusta, hoitoa ja kuntoutusta psykiatrista
                erikoissairaanhoitoa ja päihdehuoltoa tarvitseville
                kymenlaaksolaisille. Mielenterveyspalvelut on suunnattu
                erilaisissa psyykkisissä ongelmatilanteissa olevien ihmisten
                tukemiseen.{" "}
              </p>
              <p>
                Päihdepalveluiden tavoitteena on ennaltaehkäistä ja hoitaa
                päihteiden ongelmakäytön haittoja.
              </p>
            </MainContent>
          </SubHeader>
          <Side>
            {services.map(item => {
              return <SideItem>{item}</SideItem>
            })}
          </Side>
        </SubpageContainer>
      )}
    </Spring>
  </Layout>
)

export default Mielenterveys
