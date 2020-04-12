import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa"

import {
  HeaderContainer,
  HeaderContent,
  HeaderLogoContainer,
  HeaderLogo,
  HeaderLinks,
  StyledNavigation,
  SocialContent,
} from "./styled"
import CTAButton from "../CTAButton"

const Header = ({ siteTitle }) => (
  <StyledNavigation>
    <HeaderContainer>
      <HeaderContent>
        <HeaderLogoContainer>
          <HeaderLogo>
            <Link to="/">{siteTitle}</Link>
          </HeaderLogo>
        </HeaderLogoContainer>

        <SocialContent>
          <a
            href="https://www.instagram.com/susaremota/"
            target="_blank"
            rel="noopener noreferrer"
            aria-hidden="true"
          >
            <FaInstagram size="1.5rem" />
          </a>

          <a
            href="https://wa.me/5548988155040"
            target="_blank"
            rel="noopener noreferrer"
            aria-hidden="true"
          >
            <FaWhatsapp size="1.5rem" />
          </a>

          <a
            href="https://www.facebook.com/susaremota/"
            target="_blank"
            rel="noopener noreferrer"
            aria-hidden="true"
          >
            <FaFacebook size="1.5rem" />
          </a>
        </SocialContent>

        <HeaderLinks>
          <Link to="#services" activeClassName="Link--is-active">
            Serviços
          </Link>
          <Link to="#about" activeClassName="Link--is-active">
            Saiba mais
          </Link>
          <Link to="#benefits" activeClassName="Link--is-active">
            Benefícios
          </Link>
          <Link to="#contact" activeClassName="Link--is-active">
            Contato
          </Link>

          <CTAButton linkTo="contact">Entre em contato</CTAButton>
        </HeaderLinks>
      </HeaderContent>
    </HeaderContainer>
  </StyledNavigation>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
