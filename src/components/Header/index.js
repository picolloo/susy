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

        <button>
          <Link to="#">Entre em contato</Link>
        </button>
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
