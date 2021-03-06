import React from "react"
import styled from "styled-components"

import colors from "../../styles/colors"

export const Container = styled.div`
  background: ${colors.darkGray};
  padding: 10px;
  font-size: 14px;
`

export const Content = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;

  span {
    color: ${colors.white};
    display: inline-block;

    > span {
      color: ${colors.primary};
    }
  }

  a {
    text-decoration: none;
    color: ${colors.primary};
  }

  @media screen and (min-width: 335px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

// import { Container } from './styles';

export default function Footer() {
  return (
    <Container>
      <Content>
        <span>Todos os direitos reservados &copy;</span>
        <span>
          Made with <span>❤</span> by{" "}
          <a
            href="https://github.com/picolloo"
            target="_blank"
            rel="noopener noreferrer"
          >
            Picollo
          </a>
        </span>
      </Content>
    </Container>
  )
}
