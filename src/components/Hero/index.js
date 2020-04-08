import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { Container, HeroCTA, ImageContainer } from "./styled"
import CTAButton from "../CTAButton"

export default function Hero() {
  const { file } = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "women.jpg" }) {
        childImageSharp {
          fluid(quality: 92) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Container>
      <HeroCTA>
        <h1>Sem mais stress</h1>
        <span>Nós tratamos de toda a burocracia para você.</span>
        <CTAButton linkTo="contact">Faça um orçamento</CTAButton>
      </HeroCTA>

      <ImageContainer
        fluid={file.childImageSharp.fluid}
        alt="Women in a couch."
      />
    </Container>
  )
}
