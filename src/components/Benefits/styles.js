import styled from "styled-components"

import colors from "../../styles/colors"

export const Container = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: 2rem auto;
`

export const Content = styled.div`
  text-align: center;
  padding: 100px 1rem;

  > span {
    color: ${colors.gray};
  }
`

export const SliderScroll = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  margin-top: 2rem;
`

export const CardList = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  overflow-x: scroll;
  box-sizing: content-box;

  > div {
    height: 100%;
    border-radius: 5px;
    position: relative;
    display: inline-flex;

    > * + * {
      margin-left: 1rem;
    }
  }
`
