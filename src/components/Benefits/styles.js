import styled from "styled-components"

import colors from "../../styles/colors"

export const Container = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: 3rem auto;
`

export const Content = styled.div`
  text-align: center;
  padding: 100px 0;

  > span {
    color: ${colors.gray};
  }
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
    align-items: flex-start;

    > * + * {
      margin-left: 2rem;
    }
  }
`
