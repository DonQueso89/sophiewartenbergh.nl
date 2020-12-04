import React from "react"
import { graphql } from "gatsby"

export default function Concept() {
  return <></>
}

export const query = graphql`
  fragment DatoCmsConcept on DatoCmsConcept {
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
