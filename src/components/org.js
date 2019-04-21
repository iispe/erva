import React from "react"
import styled from "styled-components"

const OrgContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 10% 10% 10% 10% 10% 10% 20%;
  margin-top: 50px;
`
const OrgServices = styled.div`
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  border: 1px solid #aaa;
  border-radius: 6px;
  & p {
    font-size: 0.8em;
    font-weight: 800;
    margin-bottom: 7px;
    width: 116%;
    padding-left: 6px;
    line-height: 20px;
    text-align: center;
    transform: translate(8px);
    background-color: gainsboro;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
    border: 1px solid #aaa;
    border-radius: 3px;
    z-index: 10;
  }
`
const Kehi = styled.div`
  padding: 5px;
  // background-color: skyblue;

  margin-bottom: 15px;

  & h5 {
    margin-bottom: 5px;
  }
`

const OrgItem = styled.div`
  background-color: royalblue;
  margin: 5px;
  padding: 20px 20px;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  text-align: center;
  justify-self: center;
  border-radius: 3px;
  color: white;

  & span {
    font-size: 0.8em;
    font-weight: 800;
    align-self: ;
  }
`
const Org = () => (
  <OrgContainer>
    <OrgServices>
      <Kehi>
        <h5>Kehittämispalvelut</h5>
        <p>Palvelujen kehittäminen</p>
        <p>Osaamisen johtaminen</p>
        <p>Viestintä ja markkinointi</p>
      </Kehi>
      <Kehi>
        <h5>Hallintopalvelut</h5>
        <p>Hallinto</p>
        <p>Henkilöstöhallinto</p>
        <p>Talous</p>
        <p>Tietohallinto</p>
      </Kehi>
    </OrgServices>
    <OrgItem>
      <span>Lasten-, nuorten ja perheiden palvelut</span>
    </OrgItem>
    <OrgItem>
      <span>Aikuisten monialaiset palvelut</span>
    </OrgItem>
    <OrgItem>
      <span>Mielenterveys- ja päihdepalvelut</span>
    </OrgItem>
    <OrgItem>
      <span>Sairaalapalvelut</span>
    </OrgItem>
    <OrgItem>
      <span>Vastaanotto- ja kuntoutuspalvelut</span>
    </OrgItem>
    <OrgItem>
      <span>Koti-, asumis- ja hoivapalvelut</span>
    </OrgItem>
  </OrgContainer>
)

export default Org
