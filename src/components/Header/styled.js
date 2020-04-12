import styled from "styled-components"
import Navigation from "react-sticky-nav"

import colors from "../../styles/colors"

export const StyledNavigation = styled(Navigation)`
  position: -webkit-stick;
  z-index: 10;
  background: #fff;
`

export const HeaderContainer = styled("header")`
  max-height: 100px;
  height: 100%;
`

export const HeaderContent = styled("div")`
  display: flex;
  align-items: center;
  padding: 14px;
  justify-content: space-between;
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

export const SocialContent = styled("div")`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  > * {
    color: ${colors.primary};
    cursor: pointer;

    &:hover {
      color: ${colors.secondary};
    }

    & + * {
      margin-left: 1.5rem;
    }
  }

  @media screen and (min-width: 1830px) {
    justify-content: center;
  }
`

export const HeaderLinks = styled("div")`
  flex: 2;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 16px;

  @media screen and (max-width: 1230px) {
    display: none;
  }

  @media screen and (min-width: 1830px) {
    flex: 1;
  }

  a {
    font-weight: 400;

    color: ${colors.darkGray};

    &:not(:last-child) {
      margin-right: 2.5rem;
    }

    &:hover {
      color: ${colors.primary};
    }
  }
`
