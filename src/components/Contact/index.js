import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Formik, Field } from "formik"
import Image from "gatsby-image"

import {
  Container,
  Content,
  StyledForm,
  FormGroup,
  Button,
  ImageContainer,
} from "./styles"

export default function Contact() {
  const {
    contactImage,
    allServicesJson: { nodes: services },
  } = useStaticQuery(graphql`
    query {
      contactImage: file(relativePath: { eq: "women-talk.jpeg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      allServicesJson {
        nodes {
          id
          name
        }
      }
    }
  `)

  return (
    <Container id="contact">
      <Content>
        <ImageContainer>
          <Image fluid={contactImage.childImageSharp.fluid} />
        </ImageContainer>

        <Formik
          initialValues={{
            name: "",
            email: "",
            service: "",
            description: "",
          }}
          onSubmit={e => {
            console.log(e)
          }}
        >
          {() => (
            <StyledForm>
              <FormGroup>
                <label htmlFor="name">Nome</label>
                <Field name="name" />
              </FormGroup>
              <FormGroup>
                <label htmlFor="email">Email</label>
                <Field name="email" type="email" />
              </FormGroup>
              <FormGroup>
                <label htmlFor="service">Serviço</label>
                <Field name="service" as="select">
                  <option value="" label="Selecione um serviço" />
                  {services.map(service => (
                    <option key={service.id} value={service.id}>
                      {service.name}
                    </option>
                  ))}
                </Field>
              </FormGroup>
              <FormGroup>
                <label htmlFor="description">Descrição</label>
                <Field name="description" as="textarea" rows={4} />
              </FormGroup>
              <Button type="submit">Enviar</Button>
            </StyledForm>
          )}
        </Formik>
      </Content>
    </Container>
  )
}
