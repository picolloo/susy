import styled from "styled-components"

import colors from "../../styles/colors"

export const HeaderContainer = styled("header")`
  max-height: 100px;
  height: 100%;
`

export const HeaderContent = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`

export const HeaderLogoContainer = styled("div")`
  flex: 1;
`

export const HeaderLogo = styled("h3")`
  margin: 0;
  font-size: 1.5rem;

  > a {
    color: ${colors.primary};
  }
`

export const HeaderLinks = styled("div")`
  flex: 2;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 16px;

  @media screen and (max-width: 768px) {
    display: none;
  }

  a {
    font-weight: 400;
    margin-right: 2.5rem;
    color: ${colors.darkGray};

    &:hover {
      color: ${colors.primary};
    }
  }
`
