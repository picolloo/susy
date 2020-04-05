import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import BenefitCard from "./BenefitCard"
import { Container, Content, CardList, SliderScroll } from "./styles"

export default function Benefits() {
  const {
    allBenefitsJson: { nodes: benefits },
  } = useStaticQuery(graphql`
    {
      allBenefitsJson {
        nodes {
          index
          description
          image
        }
      }
    }
  `)

  return (
    <Container>
      <Content>
        <span>Secretariado remoto</span>
        <h3>Quais são os benefícios?</h3>

        <SliderScroll>
          <CardList>
            <div role="list">
              {benefits.map((benefit, index) => (
                <BenefitCard
                  key={index}
                  index={benefit.index}
                  description={benefit.description}
                  image={benefit.image}
                />
              ))}
            </div>
          </CardList>
        </SliderScroll>
      </Content>
    </Container>
  )
}
