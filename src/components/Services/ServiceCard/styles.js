import styled from "styled-components"

import colors from "../../../styles/colors"

export const Container = styled.div`
  width: 100%;
  margin-bottom: 30px;
  border-radius: 10px;
  padding-bottom: 0.5rem;
  overflow: hidden;
  background-image: linear-gradient(180deg, #f6f8f9 0%, #f6f8f9 100%);

  * {
    font-weight: 400;
    color: ${colors.darkGray};
  }

  @media screen and (min-width: 560px) {
    max-width: 400px;
    margin-bottom: 60px;
  }
`

export const ImageContainer = styled.div`
  max-height: 267px;
  overflow: hidden;

  > img {
    margin-bottom: 0;
  }
`

export const Title = styled.span`
  text-align: center;
  font-size: 22px;
  display: block;
  margin: 18px auto;
  font-weight: 600;
`

export const Topics = styled.ul`
  list-style: none;
  margin: 0 1.5rem;

  > li {
    font-size: 16px;
  }
`
