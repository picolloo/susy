import styled from "styled-components"

import colors from "../../../styles/colors"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  color: white;

  div:first-child {
    width: 100%;
    height: 150px;
    overflow: hidden;
    border-radius: 4px;
  }
`

export const ImageContainer = styled.div``

export const Content = styled.div`
  width: 100%;
  text-align: start;
  margin-top: 0.6rem;

  > span {
    font-size: 32px;
    line-height: 80%;
    font-weight: 600;

    &:after {
      content: " ";
      width: 30px;
      display: block;
      padding-bottom: 0.6rem;
      border-bottom: 2px solid ${colors.lightGray};
    }
  }

  > p {
    margin-top: 0.6rem;
  }
`
