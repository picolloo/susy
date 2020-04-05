import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Formik, Field } from "formik"

import {
  Container,
  Content,
  StyledForm,
  FormGroup,
  Button,
  ImageContainer,
  ButtonContainer,
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
        <ImageContainer
          fluid={contactImage.childImageSharp.fluid}
          alt="Two women talking to each other."
        />

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
              <ButtonContainer>
                <Button type="submit">Enviar</Button>
              </ButtonContainer>
            </StyledForm>
          )}
        </Formik>
      </Content>
    </Container>
  )
}
