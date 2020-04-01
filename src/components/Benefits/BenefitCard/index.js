import React from "react"

import { Container, Content, ImageContainer } from "./styles"

export default function BenefitCard({ index, description, image }) {
  return (
    <Container>
      <ImageContainer></ImageContainer>
      <Content>
        <span>{index}.</span>
        <p>{description}</p>
      </Content>
    </Container>
  )
}
