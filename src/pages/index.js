import React from "react"

import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Benefits from "../components/Benefits"
import About from "../components/About"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Services />
    <About />
    <Benefits />
    <Contact />
    <Footer />
  </Layout>
)

export default IndexPage
