import styled from "styled-components"

import colors from "../../styles/colors"

export const Container = styled.div`
  display: flex;
  flex: 1 0 100%;
  max-width: 1400px;
  display: flex;
  flex-direction: column-reverse;
  padding: 40px 20px 0;

  @media screen and (min-width: 960px) {
    padding: 115px 0 0;
    flex-direction: row;
    margin: 0 auto;
  }
`

export const HeroCTA = styled.section`
  display: flex;
  flex-direction: column;

  > h1 {
    font-size: 30px;
    font-weight: 400;
    line-height: 42px;
    color: ${colors.darkGray};
  }

  @media screen and (min-width: 960px) {
    margin: 70px 25px 0 0;
    padding: 0;
    max-width: 550px;

    > h1 {
      font-size: 42px;
      line-height: 56px;
    }
  }
`

export const ImageContainer = styled.div`
  width: 100%;

  img {
    max-height: 470px;
    height: 100%;
    border-radius: 10px;
  }
`
