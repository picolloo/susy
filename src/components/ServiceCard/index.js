import React from "react"
import PropTypes from "prop-types"

import { Container, Image, Title, Description } from "./styles"

function ServiceCard({ name, description, image }) {
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

      <div>
        <Description>{description}</Description>
      </div>
    </Container>
  )
}

ServiceCard.propTypes = {
  name: PropTypes.string.isRequired,
  topics: PropTypes.arrayOf(PropTypes.string),
}

export default ServiceCard
