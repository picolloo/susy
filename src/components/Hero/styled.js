import styled from "styled-components"
import Img from "gatsby-image"

import colors from "../../styles/colors"

export const Container = styled.div`
  display: flex;
  flex: 1 0 100%;
  max-width: 1400px;
  display: flex;
  flex-direction: column-reverse;
  padding: 30px 20px 0;
  margin-bottom: 100px;

  @media screen and (min-width: 960px) {
    flex-direction: row;
    margin: 100px auto 200px;
  }
`

export const HeroCTA = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
  flex-basis: 45%;
  align-items: flex-end;
  margin-right: 1rem;

  > h1 {
    font-size: 7vw;
    font-weight: 400;
    line-height: 42px;
    color: ${colors.darkGray};
    margin-bottom: 0.7rem;
  }

  > span {
    margin-bottom: 2rem;
    color: ${colors.gray};
    font-size: 20px;
  }

  @media screen and (min-width: 370px) {
    > h1 {
      font-size: 6vw;
    }
  }

  @media screen and (min-width: 760px) {
    margin-top: 0;
    justify-content: center;

    > h1 {
      font-size: 40px;
      line-height: 56px;
    }
  }
`

export const ImageContainer = styled(Img)`
  width: 100%;
  border-radius: 5px;
  max-height: 470px;
`
