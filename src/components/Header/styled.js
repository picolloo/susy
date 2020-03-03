import styled from "styled-components"

import colors from "../../styles/colors"

export const HeaderContainer = styled("header")`
  height: 5rem;
  width: 100%;
  
  /* padding: 0.5rem;
  background: ${colors.primary};
  width: 90%;
  margin: 0 auto;

  @media screen and (min-width: 600px) {
    width: 80%;
  } */

  color: #fff;

  a {
    color: #fff;  
  }
`

export const HeaderContent = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`

export const HeaderLogoContainer = styled("div")`
  flex: 1;
`

export const HeaderLogo = styled("h3")`
  margin: 0;
  font-size: 1.5rem;
  font-family: "Livvic", sans-serif;
`

export const HeaderLinks = styled("div")`
  flex: 2;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 18px;

  @media screen and (max-width: 768px) {
    display: none;
  }

  a {
    margin-right: 1.5rem;
  }

  > button {
    background: #fff;
    border: none;
    border-radius: 20px;
    padding: 0.5rem 1rem;

    a {
      margin-right: 0;
      color: ${colors.primary};

      &:visited {
        color: ${colors.primary};
      }
    }
  }
`
