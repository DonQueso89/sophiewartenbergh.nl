import React from "react"

import Image from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ flex: 1, width: "90%", marginBottom: 20 }}>
      <Image />
    </div>
      <h2>Fuli Tapijten</h2>
  </Layout>
)

export default IndexPage
