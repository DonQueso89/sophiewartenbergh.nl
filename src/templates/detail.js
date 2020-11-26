import React from "react"

import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Detail = ({ data, location }) => {
  const { title, slider, bodyNode, infoNode } = data.datoCmsConcept
  console.log(data)
  return <Layout info={infoNode} location={location}>
    <SEO title={title} />
    <div style={{ flex: 1, width: "90%", marginBottom: 20 }}>
      <Img fluid={slider[1].fluid} />
    </div>
    <h2>{title}</h2>
    <div dangerouslySetInnerHTML={{__html: bodyNode.childMarkdownRemark.html}}>
    </div>
  </Layout>
}

export default Detail

export const query = graphql`
  query($slug: String!) {
    datoCmsConcept(slug: { eq: $slug }) {
      infoNode {
        childMarkdownRemark {
          html
        }
      }
      bodyNode {
        childMarkdownRemark {
          html
        }
      }
      title
      slug
      slider {
        fluid {
            ...GatsbyDatoCmsFluid
        }
      }
    }
  }
`
