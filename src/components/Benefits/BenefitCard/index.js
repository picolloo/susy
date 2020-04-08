import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

import { Container, Content, ImageContainer } from "./styles"

const renderImage = file => <Img fluid={file.node.childImageSharp.fluid} />

export default function BenefitCard({
  index,
  description,
  imageSrc,
  imageReferal,
}) {
  const { images } = useStaticQuery(graphql`
    query {
      images: allFile(filter: { extension: { regex: "/jpg/" } }) {
        edges {
          node {
            extension
            relativePath
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Container>
      <ImageContainer>
        {renderImage(
          images.edges.find(img => img.node.relativePath === imageSrc)
        )}
      </ImageContainer>

      <Content>
        <span>{index}.</span>
        <p>{description}</p>
      </Content>
    </Container>
  )
}
