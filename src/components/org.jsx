import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const OrgContainer = styled.div`
  max-width: 950px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  margin: 30px auto;

  & h4 {
    text-align: center;
    padding-top: 1rem;
  }
`;

const OrgServices = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  background-color: #ddd;
  border: 1px solid #bbb;

  border-radius: 3px;
  &:nth-child(2) {
    margin-left: 30px;
  }
`;

const OrgItem = styled.div`
  flex: 1;
  background-color: royalblue;
  box-shadow: 0px -3px 6px rgba(0, 0, 0, 0.3);
  margin: 5px;
  padding: 20px 40px;

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
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
const Org = () => (
  <OrgContainer>
    <OrgServices>
      <h4>OSALLISUUDEN PALVELUT</h4>
      <OrgItem>
        <span>
          <StyledLink to="/lnp">
            Lasten, nuorten ja perheiden palvelut
          </StyledLink>
        </span>
      </OrgItem>
      <OrgItem>
        <span>
          <StyledLink to="/aikuistenmoniala">
            Aikuisten monialaiset palvelut
          </StyledLink>
        </span>
      </OrgItem>
      <OrgItem>
        <span>
          <StyledLink to="/mielenterveys">
            Mielenterveys - ja päihdepalvelut
          </StyledLink>
        </span>
      </OrgItem>
    </OrgServices>

    <OrgServices>
      <h4>TERVEYDEN JA IKÄÄNTYMISEN PALVELUT</h4>
      <OrgItem>
        <span>
          <StyledLink to="/sairaala"> Sairaalapalvelut </StyledLink>
        </span>
      </OrgItem>

      <OrgItem>
        <span>
          <StyledLink to="/vastaanottojakuntoutus">
            Vastaanotto- ja kuntoutuspalvelut
          </StyledLink>
        </span>
      </OrgItem>

      <OrgItem>
        <span>
          <StyledLink to="/tip">Koti- , asumis- ja hoivapalvelut</StyledLink>
        </span>
      </OrgItem>
    </OrgServices>
  </OrgContainer>
);

export default Org;
