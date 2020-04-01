import React from "react"
import styled from "styled-components"

import CTAButton from "../CTAButton"
import colors from "../../styles/colors"

export const Container = styled.div`
  max-width: 1400px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 0;
  text-align: center;
`

export const Content = styled.div`
  justify-content: space-between;

  > h4 {
    font-weight: 500;
    font-size: 110%;

    &:first-child {
      color: ${colors.gray};
      margin-bottom: 0.6rem;
    }

    margin-bottom: 1rem;
  }
`
export default function Interest() {
  return (
    <Container>
      <Content>
        <h4>Gostou e quer saber mais?</h4>
        <h4>Nós entramos em contato com você</h4>

        <CTAButton linkTo="contact">Quero saber mais</CTAButton>
      </Content>
    </Container>
  )
}
