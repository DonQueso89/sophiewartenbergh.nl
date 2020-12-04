import React from "react"
import { graphql } from "gatsby"

export default function Event() {
  return <></>
}

export const query = graphql`
  fragment DatoCmsEvent on DatoCmsEvent {
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
