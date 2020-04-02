import React from "react"
import styled from "styled-components"

import CTAButton from "../CTAButton"
import colors from "../../styles/colors"

export const Container = styled.div`
  max-width: 1400px;
  margin: 80px auto 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const Content = styled.div`
  justify-content: space-between;

  > h4 {
    font-weight: 500;
    font-size: 110%;
    margin-bottom: 1rem;

    &:first-child {
      color: ${colors.gray};
      margin-bottom: 0.6rem;
    }
  }

  > div {
    margin-top: 2rem;
  }
`
export default function Interest() {
  return (
    <Container>
      <Content>
        <h4>Gostou e quer saber mais?</h4>
        <h4>Nós entramos em contato com você</h4>

        <div>
          <CTAButton linkTo="contact">Quero saber mais</CTAButton>
        </div>
      </Content>
    </Container>
  )
}
