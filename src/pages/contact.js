import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

const Contact = ({ data }) => {
  const payload = data.allDatoCmsContact.edges[0].node
  return (
    <Layout pageTitle="Contact" info={payload.infoNode}>
      <SEO title="Contact" />
      <h1 className="page-title">About</h1>
      <div className="contact-container">
          <Img fixed={payload.image.fixed} className="contact-img" imgStyle={{objectFit: "contain", objectPosition: "left top"}}/>
        <div
          className="contact-content"
          dangerouslySetInnerHTML={{
            __html: payload.bodyNode.childMarkdownRemark.html,
          }}
        ></div>
      </div>
    </Layout>
  )
}

export default Contact

export const query = graphql`
  query c {
    allDatoCmsContact {
      edges {
        node {
          image {
            fixed {
              ...GatsbyDatoCmsFixed
            }
          }
          bodyNode {
            childMarkdownRemark {
              html
            }
          }
          infoNode {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
