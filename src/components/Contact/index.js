import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Formik, Field } from "formik"

import useEmail from "../../hooks/useEmail"
import {
  Container,
  Content,
  StyledForm,
  FormGroup,
  Button,
  ButtonContainer,
} from "./styles"

export default function Contact() {
  const { sendEmail } = useEmail()

  const {
    allServicesJson: { nodes: services },
  } = useStaticQuery(graphql`
    query {
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
        <h3>Gostou da Susa Remota e gostaria de contratar nossos serviços?</h3>
        <span>Deixe seus dados aqui que entraremos em contato.</span>

        <Formik
          initialValues={{
            name: "",
            email: "",
            service: "",
            description: "",
          }}
          onSubmit={async (payload, { resetForm, setSubmitting }) => {
            try {
              await sendEmail(payload)
              resetForm({})
            } catch (error) {
              console.error(error)
              setSubmitting(false)
            }
          }}
          validate={({ name, email, service, description }) => {
            const errors = {}

            if (!name) errors.name = "O campo nome é obrigatório."
            if (!email) errors.email = "O campo email é obrigatório."
            if (!service) errors.service = "O campo serviço é obrigatório."
            if (!description)
              errors.description = "O campo descrição é obrigatório."

            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))
              errors.email = "O campo email possui um valor inválido."

            return errors
          }}
        >
          {({ isSubmitting, errors, touched, isValidating }) => (
            <StyledForm>
              <FormGroup
                error={errors.name && touched.name ? errors.name : null}
              >
                <label htmlFor="name">
                  Nome
                  <span>*</span>
                </label>
                <Field name="name" />
                {errors.name && <small>{errors.name}</small>}
              </FormGroup>
              <FormGroup
                error={errors.email && touched.email ? errors.email : null}
              >
                <label htmlFor="email">
                  Email
                  <span>*</span>
                </label>
                <Field name="email" />
                {errors.email && <small>{errors.email}</small>}
              </FormGroup>
              <FormGroup
                error={
                  errors.service && touched.service ? errors.service : null
                }
              >
                <label htmlFor="service">
                  Serviço
                  <span>*</span>
                </label>
                <Field name="service" as="select">
                  <option value="" label="Selecione um serviço" disabled />
                  {services.map(service => (
                    <option key={service.id} value={service.name}>
                      {service.name}
                    </option>
                  ))}
                </Field>
                {errors.service && <small>{errors.service}</small>}
              </FormGroup>
              <FormGroup
                error={
                  errors.description && touched.description
                    ? errors.description
                    : null
                }
              >
                <label htmlFor="description">
                  Descrição
                  <span>*</span>
                </label>
                <Field name="description" as="textarea" rows={4} />
                {errors.description && <small>{errors.description}</small>}
              </FormGroup>
              <ButtonContainer>
                <Button type="submit" disabled={isSubmitting || isValidating}>
                  Enviar
                </Button>
              </ButtonContainer>
            </StyledForm>
          )}
        </Formik>
      </Content>
    </Container>
  )
}
