import React from "react"
import { graphql } from "gatsby"

export default function Product() {
  return <></>
}

export const query = graphql`
  fragment DatoCmsProduct on DatoCmsProduct {
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
`
