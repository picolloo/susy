import styled from "styled-components"

import colors from "../../styles/colors"

export const Container = styled.div`
  width: 100%;
  margin-bottom: 30px;

  * {
    font-weight: 400;
    color: ${colors.lightGray};
  }

  @media screen and (min-width: 560px) {
    max-width: 400px;
    margin-bottom: 60px;
  }
`

export const Image = styled.div`
  > img {
    width: 100%;
    margin-bottom: 0;
  }
`

export const Title = styled.span`
  font-size: 22px;
  margin-top: 18px;
  display: inline-block;
`

export const Description = styled.p`
  font-size: 16px;
  margin-top: 12px;
`
