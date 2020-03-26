import styled from "styled-components"

export const Container = styled.div``

export const Content = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: auto;
  text-align: center;
  padding: 100px 0;
`

export const CardList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 4rem;

  @media screen and (min-width: 800px) {
    flex-direction: row;

    > * + * {
      margin-left: 2rem;
    }
  }
`
