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
        <Link to="#" activeClassName="Link--is-active">
          Home
        </Link>
        <Link to="#" activeClassName="Link--is-active">
          Serviços
        </Link>
        <Link to="#" activeClassName="Link--is-active">
          Como funciona
        </Link>
        <Link to="#" activeClassName="Link--is-active">
          Depoimentos
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
