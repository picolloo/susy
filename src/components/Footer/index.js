import React from "react"
import styled from "styled-components"

import colors from "../../styles/colors"

export const Container = styled.div`
  background: ${colors.darkGray};
  padding: 20px 0;
`

export const Content = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;

  span {
    color: ${colors.white};

    > span {
      color: ${colors.primary};
    }
  }

  a {
    text-decoration: none;
    color: ${colors.primary};
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
          <a href="https://github.com/picolloo">Picollo</a>
        </span>
      </Content>
    </Container>
  )
}
