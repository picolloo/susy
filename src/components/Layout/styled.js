import styled from "styled-components"

import HeroBg from "../../images/hero-bg.svg"

export const LayoutContainer = styled.div`
  /* display: grid;
  grid-template:
    50px
    680px
    600px
    / auto 980px auto;

  grid-template-areas:
    ". header ."
    ". hero ."
    ". services ."; */

  padding: 1.5rem 0;
  background-image: url(${HeroBg});
  background-repeat: no-repeat;
  background-position: center;
`

export const LayoutContent = styled.main`
  max-width: 1020px;
  margin: auto;
  font-family: "Livvic", sans-serif;
`
