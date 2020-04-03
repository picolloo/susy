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
        <h1>Tenha sua vida na palma da mão</h1>
        <CTAButton linkTo="contact">Faça um orçamento</CTAButton>
      </HeroCTA>

      <ImageContainer
        fluid={file.childImageSharp.fluid}
        alt="Women in a couch."
      />
    </Container>
  )
}
