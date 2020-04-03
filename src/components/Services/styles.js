import styled from "styled-components"

import colors from "../../styles/colors"

export const Container = styled.div`
  background-color: ${colors.secondary};
  padding: 10px 0;
`

export const Content = styled.div`
  max-width: 1400px;
  width: 100%;
  padding: 0 20px;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const HeaderContent = styled.div`
  color: ${colors.darkGray};
  max-width: 450px;
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;

  * {
    color: ${colors.white};
  }

  > h2 {
    font-size: 36px;
    font-weight: 400;
  }

  > p {
    font-weight: 400;
    font-size: 18px;
  }

  @media screen and (min-width: 560px) {
    > h2 {
      font-size: 40px;
    }
  }
`

export const ServicesContent = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: -10px;

  > * {
    flex: 1 0 300px;
    margin: 10px;

    @media screen and (min-width: 450px) {
      flex: 1 0 400px;
    }
  }
`
