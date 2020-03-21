import React from "react"
import styled from "styled-components"

import colors from "../../styles/colors"
import HeroImage from "../../images/hero-rocket.svg"

export const Container = styled.div`
  display: flex;
  font-family: "Livvic", sans-serif;
  color: white;
  margin: 4rem auto;
  /* padding-bottom: 10rem; */
  display: flex;
  flex-direction: column-reverse;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin: 150px auto 110px;
  }
`

export const HeroCTA = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  @media screen and (min-width: 768px) {
    text-align: inherit;
  }

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
    margin: auto;

    @media screen and (min-width: 768px) {
      margin: 0;
    }
  }
`

export const ImageContainer = styled.div`
  width: 80%;
  margin: auto;

  @media screen and (min-width: 768px) {
    width: 100%;
    margin: 0;
  }
`

export default function Hero() {
  return (
    <Container>
      <HeroCTA>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <button>Faça um orçamento</button>
      </HeroCTA>

      <ImageContainer>
        <img src={HeroImage} alt="girl in a rocket" />
      </ImageContainer>
    </Container>
  )
}
