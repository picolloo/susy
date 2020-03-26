import React from "react"

// import { Container } from "./styles"

import styled from "styled-components"

import colors from "../../../styles/colors"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;

  div:first-child {
    width: 100%;
    height: 150px;
    overflow: hidden;
    border-radius: 4px;
    background: ${colors.lightGray};
  }
`

export const Content = styled.div`
  width: 100%;
  text-align: start;
  margin-top: 0.6rem;

  > span {
    font-size: 32px;
    color: ${colors.lightGray};
    line-height: 80%;
    font-weight: 600;

    &:after {
      content: " ";
      width: 30px;
      display: block;
      padding-bottom: 0.6rem;
      border-bottom: 2px solid ${colors.lightGray};
    }
  }

  > p {
    color: ${colors.darkGray};
  }
`

export default function BenefitCard({ index, description, image }) {
  return (
    <Container>
      <div></div>
      <Content>
        <span>{index}.</span>
        <p>{description}</p>
      </Content>
    </Container>
  )
}
