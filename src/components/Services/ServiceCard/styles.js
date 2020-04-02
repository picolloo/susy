import styled from "styled-components"

import colors from "../../../styles/colors"

export const Container = styled.div`
  width: 100%;
  margin-bottom: 30px;

  * {
    font-weight: 400;
    color: ${colors.white};
  }

  @media screen and (min-width: 560px) {
    max-width: 400px;
    margin-bottom: 60px;
  }
`

export const Image = styled.div`
  border-radius: 10px;
  overflow: hidden;

  > img {
    width: 100%;
    margin-bottom: 0;
  }
`

export const Title = styled.span`
  font-size: 22px;
  margin-top: 18px;
  font-weight: 600;
  display: inline-block;
  border-bottom: 1px solid ${colors.white};
`

export const Topics = styled.ul`
  margin-top: 15px;
  list-style: none;
  margin-left: 10px;

  > li {
    font-size: 16px;
  }
`
