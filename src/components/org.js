import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const OrgContainer = styled.div`
  max-width: 750px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  margin: 30px auto;
`

const OrgServices = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
  background-color: #ddd;
  border: 1px solid #bbb;

  border-radius: 3px;
  &:nth-child(2) {
    margin-left: 30px;
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
  box-shadow: 0px -3px 6px rgba(0, 0, 0, 0.3);
  margin: 5px;
  padding: 20px 40px;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  text-align: center;
  justify-self: center;
  border-radius: 3px;
  color: white;
  font-family: tahoma;
  text-transform: uppercase;
  & span {
    font-size: 0.8em;
    font-weight: 800;
    align-self: ;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`
const Org = () => (
  <OrgContainer>
    <OrgServices>
      <OrgItem>
        <span>
          <StyledLink to="">Lasten-, nuorten ja perheiden palvelut</StyledLink>
        </span>
      </OrgItem>
      <OrgItem>
        <span>Aikuisten monialaiset palvelut</span>
      </OrgItem>
      <OrgItem>
        <span>
          <StyledLink to="/mielenterveys">
            Mielenterveys- ja päihdepalvelut
          </StyledLink>
        </span>
      </OrgItem>
    </OrgServices>
    <OrgServices>
      <OrgItem>
        <span>Sairaalapalvelut</span>
      </OrgItem>
      <OrgItem>
        <span>Vastaanotto- ja kuntoutuspalvelut</span>
      </OrgItem>
      <OrgItem>
        <span>Koti-, asumis- ja hoivapalvelut</span>
      </OrgItem>
    </OrgServices>
  </OrgContainer>
)

export default Org
