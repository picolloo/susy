import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import {
  HeaderContainer,
  HeaderContent,
  HeaderLogoContainer,
  HeaderLogo,
  HeaderLinks,
} from "./styled"
import CTAButton from "../CTAButton"

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <HeaderContent>
      <HeaderLogoContainer>
        <HeaderLogo>
          <Link to="/">{siteTitle}</Link>
        </HeaderLogo>
      </HeaderLogoContainer>

      <HeaderLinks>
        <Link to="#works" activeClassName="Link--is-active">
          Como funciona
        </Link>
        <Link to="#services" activeClassName="Link--is-active">
          Serviços
        </Link>
        <Link to="#pricing" activeClassName="Link--is-active">
          Preços
        </Link>
        <Link to="#faq" activeClassName="Link--is-active">
          FAQ
        </Link>

        <CTAButton>Entre em contato</CTAButton>
      </HeaderLinks>
    </HeaderContent>
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
