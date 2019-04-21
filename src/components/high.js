import React from "react"
import styled from "styled-components"

const TopItem = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 220px;
  background-color: darkkhaki;
  padding: 12px;
  border-radius: 3px;
  margin-bottom: 30px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
`

const High = () => (
  <>
    <TopItem>Valtuusto</TopItem>
    <TopItem>Hallitus</TopItem>
    <TopItem>Toimari</TopItem>
  </>
)

export default High
