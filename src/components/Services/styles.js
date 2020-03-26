import styled from "styled-components"

import colors from "../../styles/colors"

export const Container = styled.div`
  background-color: ${colors.primary};
  padding: 100px 0 0;
`

export const Content = styled.div`
  max-width: 1400px;
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 156px;

  @media screen and (min-width: 1020px) {
    flex-direction: row;
    align-items: flex-start;
    margin-top: 100px;
  }
`

export const HeaderContent = styled.div`
  color: ${colors.darkGray};
  max-width: 450px;
  width: 100%;
  text-align: center;

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

  @media screen and (min-width: 1020px) {
    text-align: left;
  }
`

export const ServicesContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 560px) {
    justify-content: space-evenly;
    flex-direction: row;
  }

  > div {
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 560px) {
      width: 45%;
    }
  }
`
