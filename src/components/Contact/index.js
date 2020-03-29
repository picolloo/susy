import React from "react"
import styled from "styled-components"
import { Formik, Form } from "formik"

import colors from "../../styles/colors"

export const Container = styled.div`
  padding: 0 20px;
  margin: 0;
  background: ${colors.primary};

  /* display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  } */
`

export const Content = styled.div`
  max-width: 1400px;
  width: 100%;
`

export const StyledForm = styled(Form)`
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > div {
    width: 100%;
    margin-bottom: 1rem;

    label {
      font-weight: 600;
      color: ${colors.darkGray};
      width: 100%;
    }
  }

  > button {
    border: none;
    background: ${colors.secondary};
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 126px;
    width: 9rem;
  } */
`

export default function Contact() {
  return (
    <Container>
      <Content>
        <Formik
          initialValues={{
            name: "",
            email: "",
            service: null,
            description: "",
            deliveryDate: null,
          }}
          onSubmit={data => {
            console.log(data)
          }}
        >
          {() => (
            <StyledForm>
              <div>
                <label htmlFor="name">
                  Nome
                  <input id="name" name="name"></input>
                </label>
              </div>
              <div>
                <label htmlFor="email">
                  Email
                  <input id="email" name="email"></input>
                </label>
              </div>
              <div>
                <label htmlFor="service">
                  Serviço
                  <input id="service" name="service" type="select"></input>
                </label>
              </div>
              <div>
                <label htmlFor="description">
                  Descrição
                  <input
                    id="description"
                    name="description"
                    type="textarea"
                  ></input>
                </label>
              </div>
              <div>
                <label htmlFor="deliveyDate">
                  Data de entrega
                  <input
                    id="deliveyDate"
                    name="deliveyDate"
                    type="date"
                  ></input>
                </label>
              </div>
              <button type="submit">Enviar</button>
            </StyledForm>
          )}
        </Formik>
      </Content>
    </Container>
  )
}
