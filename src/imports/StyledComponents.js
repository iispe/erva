import styled from "styled-components";

export const SubHeader = styled.div`
  background-image: linear-gradient(
    to top,
    #051937,
    #0c1c42,
    #181d4c,
    #261e54,
    #351d5c
  );
  padding-bottom: 20px;
`;

export const SubpageContainer = styled.div``;

export const MainContent = styled.div`
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
    border-bottom: 3px solid #ef7b5a;
    text-transform: uppercase;
  }
`;

export const SideItem = styled.div`
  background-color: #f5f5f5;
  place-items: stretch;
  border: 1px solid #674a8f;
  border-radius: 17px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  color: #351d5c;
  text-align: center;
  font-family: "tahoma";
  text-transform: uppercase;
  font-weight: 800;
  font-size: 0.9rem;
  padding: 20px;

  & h3 {
    color: #c34965;
    border-bottom: 2px solid #351d5c;
    width: 100%;
    padding-bottom: 10px;
  }
`;
