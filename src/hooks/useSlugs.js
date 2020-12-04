import { useStaticQuery, graphql } from "gatsby"

const useSlugs = () => {
  const data = useStaticQuery(graphql`
    query slugs {
      allDatoCmsConcept {
        edges {
          node {
            slug
            title
          }
        }
      }
      allDatoCmsEvent {
        edges {
          node {
            slug
            title
          }
        }
      }
      allDatoCmsProduct {
        edges {
          node {
            slug
            title
          }
        }
      }
    }
  `)
  console.log(data)
  return [
    data.allDatoCmsConcept.edges.map(({ node }) => node),
    data.allDatoCmsProduct.edges.map(({ node }) => node),
    data.allDatoCmsEvent.edges.map(({ node }) => node),
  ]
}

export default useSlugs
