import styled from "styled-components"

import HeroBg from "../../images/hero-bg.svg"

export const LayoutContainer = styled.div`
  padding: 0 1.5em;
  background-image: url(${HeroBg});
  background-repeat: no-repeat;
  background-position: top center;
`

export const LayoutContent = styled.main`
  max-width: 1020px;
  margin: 0 auto;
  font-family: "Livvic", sans-serif;
`
