import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import { Container, Image, Title, Topics } from "./styles"

const renderImage = file => <Img fluid={file.node.childImageSharp.fluid} />

function ServiceCard({ name, topics, imageSrc, imageReferral }) {
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
      <Image>
        {renderImage(
          images.edges.find(img => img.node.relativePath === imageSrc)
        )}
      </Image>

      <Title>{name}</Title>

      <Topics>
        {topics.map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      </Topics>
    </Container>
  )
}

ServiceCard.propTypes = {
  name: PropTypes.string.isRequired,
  topics: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default ServiceCard
