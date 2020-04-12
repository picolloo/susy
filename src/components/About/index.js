import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import colors from "../../styles/colors"

export const Container = styled.div`
  max-width: 1400px;
  width: 90%;
  margin: 100px auto 0;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 960px) {
    flex-direction: row;
    width: 100%;
    padding: 100px 1rem 0;
  }
`

export const Content = styled.div`
  flex: 0 0 50%;

  > h2 {
    text-align: center;
    color: ${colors.primary};
  }

  span {
    color: ${colors.primary};
    display: inline-block;
  }
`

export const ImageContainer = styled.div`
  flex: 0 0 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  * {
    max-height: 500px;
    height: 100%;
    width: 400px;
  }
`

export default function About() {
  const { file } = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "susa.jpeg" }) {
        childImageSharp {
          fluid(quality: 92) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Container id="about">
      <Content>
        <h2>Saiba mais</h2>

        <p>
          Me chamo Susana Oliveira empreendedora e criadora da{" "}
          <span> Susa - Secretaria Remota.</span>
        </p>

        <p>
          Sou formada pela Universidade Federal de Santa Catarina, fui
          Assistente Administrativa durante 10 anos e desde 2004 atuo como
          Secretaria Executiva, lá se foram 25 anos de muito aprendizado e
          experiência.
        </p>

        <p>
          Criei a Susa -Secretaria Remota pensando naqueles profissionais que
          acabam perdendo seu precioso tempo em tarefas burocráticas, ou mesmo
          naquelas tarefas que poderiam ser terceirizadas, estamos aqui para
          ajuda-lo a utilizar seu tempo investindo melhor no seu cliente ou
          produto.
        </p>

        <p>
          Somos uma empresa voltada a profissionais liberais, microempreendores
          e empresas com maior know-how que desejam terceirizar aquelas tarefas
          de organização e burocracias que acabam atrasando o fluxo de suas
          empresas.
        </p>

        <p style={{ textAlign: "center" }}>
          Conte com a gente!! Estamos a disposição.
        </p>
      </Content>

      <ImageContainer>
        <Img
          fluid={file.childImageSharp.fluid}
          alt="Woman in a couch."
          imgStyle={{
            objectFit: "cover",
            borderRadius: "10px",
            objectPosition: "center",
            margin: "auto",
            display: "block",
          }}
        />
      </ImageContainer>
    </Container>
  )
}
