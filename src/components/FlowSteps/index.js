import React from "react"
import styled from "styled-components"

import colors from "../../styles/colors"

export const Container = styled.div`
  max-width: 978px;
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 20px 80px rgba(0, 0, 0, 0.1);
  border-radius: 18px;
  padding: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Content = styled.div`
  text-align: center;
  color: ${colors.gray};
  font-family: "Livvic", sans-serif;

  h3,
  h4 {
    font-family: "Livvic", sans-serif;
  }

  h3 {
    font-weight: 700;
  }
`

export default function FlowSteps() {
  return (
    <Container>
      <Content>
        <h4>Como funciona?</h4>
        <h3>Rápido e prático</h3>
      </Content>
    </Container>
  )
}
