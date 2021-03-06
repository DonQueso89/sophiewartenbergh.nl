import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Bio = ({ data }) => (
  <Layout pageTitle="Bio">
    <SEO title="Bio" />
    <div
      className="bio-container"
    ></div>
    <h1 className="page-title">Vision</h1>
    <div
      className="bio-content"
      dangerouslySetInnerHTML={{
        __html: data.allDatoCmsBio.edges[0].node.bodyNode.childMarkdownRemark.html,
      }}
    ></div>
  </Layout>
)

export default Bio

export const query = graphql`
  query b {
    allDatoCmsBio {
      edges {
        node {
          bodyNode {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
