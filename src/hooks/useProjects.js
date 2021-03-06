import { useStaticQuery, graphql } from "gatsby"


const useProjects = () => {
  const data = useStaticQuery(graphql`
    query projects {
      allDatoCmsConcept {
        edges {
          node {
            slug
            title
            __typename
            frontpagePictures {
              fluid {
                ...GatsbyDatoCmsFluid
              }
            }
          }
        }
      }
      allDatoCmsEvent {
        edges {
          node {
            slug
            title
            __typename
            frontpagePictures {
              fluid {
                ...GatsbyDatoCmsFluid
              }
            }
          }
        }
      }
      allDatoCmsProduct {
        edges {
          node {
            slug
            title
            __typename
            frontpagePictures {
              fluid {
                ...GatsbyDatoCmsFluid
              }
            }
          }
        }
      }
    }
  `)
  return [
    ...data.allDatoCmsConcept.edges.map(({ node }) => node),
    ...data.allDatoCmsProduct.edges.map(({ node }) => node),
    ...data.allDatoCmsEvent.edges.map(({ node }) => node),
  ].map(obj => {
    const url = obj.__typename.replace(/DatoCms/, "").toLowerCase()
    return {...obj, slug: `/work/${url}/${obj.slug}`}
  })
}

export default useProjects
