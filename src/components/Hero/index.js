import React from "react"
import styled from "styled-components"

import colors from "../../styles/colors"
import HeroImage from "../../images/hero-rocket.svg"

export const Container = styled.div`
  display: flex;
  font-family: "Livvic", sans-serif;
  color: white;
  margin: 200px auto 110px;
`

export const HeroCTA = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;

  > h1 {
    font-size: 60px;
    font-weight: 500;
  }

  > button {
    border: none;
    border-radius: 126px;
    color: white;
    background: ${colors.secondary};
    width: 250px;
    height: 50px;
  }
`

export default function Hero() {
  return (
    <Container>
      <HeroCTA>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <button>Faça um orçamento</button>
      </HeroCTA>

      <div>
        <img src={HeroImage} alt="girl in a rocket" />
      </div>
    </Container>
  )
}
