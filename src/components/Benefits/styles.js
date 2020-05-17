import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  margin: 2rem auto;
  background: #ea1d2d;
  background: -webkit-linear-gradient(top, #ea1d2d, #cf3401);
  background: -moz-linear-gradient(top, #ea1d2d, #cf3401);
  background: linear-gradient(to bottom, #ea1d2d, #cf3401);
`

export const Content = styled.div`
  text-align: center;
  margin: auto;
  padding: 100px 1rem;
  max-width: 1400px;
  color: white;
`

export const SliderScroll = styled.div`
  position: relative;
  width: 100%;
  /* overflow: hidden; */
  margin-top: 2rem;
`

export const CardList = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  overflow-x: auto;
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
