import React from "react"
import { graphql, useStaticQuery } from "gatsby"

export default function Services() {
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
    <div>
      {services.map(({ node: s }) => (
        <li>{s.name}</li>
      ))}
    </div>

    // <ul>
    //   {services.map(({ node: s }) => (
    //     <li>{s.name}</li>
    //   ))}
    // </ul>
  )
}
