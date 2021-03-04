import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = ({ data }) => (
  <Layout pageTitle="Contact">
    <SEO title="Contact" />
    <div
      className="contact-container"
    ></div>
    <h1 className="page-title">Contact</h1>
    <div
      className="contact-content"
      dangerouslySetInnerHTML={{
        __html: data.allDatoCmsContact.edges[0].node.bodyNode.childMarkdownRemark.html,
      }}
    ></div>
  </Layout>
)

export default Contact


export const query = graphql`
  query c {
    allDatoCmsContact {
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

