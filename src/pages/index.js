import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/Layout"
import FlowSteps from "../components/FlowSteps"
import Hero from "../components/Hero"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <FlowSteps />
    {/* <Services /> */}
  </Layout>
)

export default IndexPage
