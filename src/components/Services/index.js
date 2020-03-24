import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import ServiceCard from "../ServiceCard"
import { Container, HeaderContent, ServicesContent } from "./styles"

export default function Services() {
  const {
    allServicesJson: { edges: services },
  } = useStaticQuery(graphql`
    {
      allServicesJson {
        edges {
          node {
            id
            name
            description
          }
        }
      }
    }
  `)

  return (
    <Container>
      <HeaderContent>
        <h2>Conheça nossos serviços</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
          molestiae blanditiis quibusdam cumque obcaecati quia consequatur
          possimus sed saepe! Similique.
        </p>
      </HeaderContent>

      <ServicesContent>
        <div>
          {services.map(
            ({ node: s }, index) =>
              index % 2 === 0 && (
                <ServiceCard
                  key={index}
                  name={s.name}
                  description={s.description}
                  image={"hero-rocket.svg"}
                />
              )
          )}
        </div>
        <div>
          {services.map(
            ({ node: s }, index) =>
              index % 2 !== 0 && (
                <ServiceCard
                  key={index}
                  name={s.name}
                  description={s.description}
                  image={"hero-rocket.svg"}
                />
              )
          )}
        </div>
      </ServicesContent>
    </Container>
  )
}
