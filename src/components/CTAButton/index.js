import React from "react"
import styled from "styled-components"

import colors from "../../styles/colors"

const Link = styled.a`
  background: ${colors.primary};
  border: 1px solid ${colors.primary};
  border-radius: 4px;
  padding: 10px 20px;
  outline: none;
  max-width: 205px;
  color: #fff;
  text-decoration: none;
  text-align: center;

  letter-spacing: 1px;
  font-size: 16px;

  &:visited {
    color: #fff;
  }

  &:hover {
    background: none;

    color: ${colors.primary} !important;
  }
`

export default function CTAButton({ children, linkTo }) {
  return (
    <Link href={`#${linkTo}`} style={{ color: "#fff", fontWeight: 600 }}>
      {children}
    </Link>
  )
}
