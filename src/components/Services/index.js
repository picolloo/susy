import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

import colors from "../../styles/colors"
import ServiceCard from "../ServiceCard"

export const Container = styled.div`
  max-width: 978px;
  width: 100%;
  background: #ffffff;

  border-radius: 18px;
  padding: 1rem;

  /* box-shadow: 0px 20px 80px rgba(0, 0, 0, 0.1); */
  /* position: absolute;
  top: 780px;
  z-index: 2; */

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    padding: 3rem;
  }
`
export const Content = styled.div`
  text-align: center;
  color: ${colors.gray};
  font-family: "Livvic", sans-serif;

  h3 {
    font-weight: 700;
    font-family: "Livvic", sans-serif;
  }
`

export const ServiceList = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    /* display: grid;
    grid-template: repeat(1fr, 2) / repeat(1fr, 2); */
  }
`

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
            topics
          }
        }
      }
    }
  `)

  return (
    <Container>
      <Content>
        <h2>Serviços</h2>

        <ServiceList>
          {services.map(({ node: s }, index) => (
            <ServiceCard key={index} name={s.name} topics={s.topics} />
          ))}
        </ServiceList>
      </Content>
    </Container>
  )
}
