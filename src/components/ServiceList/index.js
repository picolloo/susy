import React from "react"
import { graphql, useStaticQuery } from "gatsby"

export default function ServiceList() {
  const {
    allServicesJson: { edges: services },
  } = useStaticQuery(graphql`
    {
      allServicesJson {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  `)

  return (
    <ul>
      {services.map(({ node: s }) => (
        <li>{s.name}</li>
      ))}
    </ul>
  )
}
