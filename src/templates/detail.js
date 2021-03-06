import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ImageCarousel from "../components/ImageCarousel"

const Detail = ({ data, location }) => {
  const { title, slider, bodyNode, infoNode } =
    data.datoCmsConcept || data.datoCmsProduct || data.datoCmsEvent
  return (
    <Layout info={infoNode} location={location}>
      <SEO title={title} />
      <div style={{ flex: 1, width: "100%", marginBottom: 20 }}>
        <ImageCarousel fluidImages={slider} />
      </div>
      <h2>{title}</h2>
      <div
        dangerouslySetInnerHTML={{ __html: bodyNode.childMarkdownRemark.html }}
      ></div>
    </Layout>
  )
}

export default Detail

export const query = graphql`
  query(
    $slug: String!
    $isConcept: Boolean!
    $isProduct: Boolean!
    $isEvent: Boolean!
  ) {
    datoCmsConcept(slug: { eq: $slug }) @include(if: $isConcept) {
      ...DatoCmsConcept
    }
    datoCmsProduct(slug: { eq: $slug }) @include(if: $isProduct) {
      ...DatoCmsProduct
    }
    datoCmsEvent(slug: { eq: $slug }) @include(if: $isEvent) {
      ...DatoCmsEvent
    }
  }
`
