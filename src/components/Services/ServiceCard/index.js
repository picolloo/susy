import React from "react"
import PropTypes from "prop-types"

import { Container, Image, Title, Topics } from "./styles"

function ServiceCard({ name, topics, image }) {
  return (
    <Container>
      <Image>
        <img
          src={
            "https://empresas.ifood.com.br/static/media/benefits-3.74859c10.png"
          }
          alt="service icon"
        />
      </Image>

      <div>
        <Title>{name}</Title>
      </div>

      <Topics>
        {topics.map(topic => (
          <li>{topic}</li>
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
