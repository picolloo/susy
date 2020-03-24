import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import { Container, HeroCTA, ImageContainer } from "./styled"
import CTAButton from "../CTAButton"

export default function Hero() {
  const { file } = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "women.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
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
        <CTAButton>Faça um orçamento</CTAButton>
      </HeroCTA>

      <ImageContainer>
        <Img fluid={file.childImageSharp.fluid} alt="Women in a couch." />
      </ImageContainer>
    </Container>
  )
}
