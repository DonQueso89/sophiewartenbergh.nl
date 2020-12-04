const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const { data } = await graphql(`
    query concept {
      allDatoCmsConcept {
        edges {
          node {
            slug
          }
        }
      }
      allDatoCmsEvent {
        edges {
          node {
            slug
          }
        }
      }
      allDatoCmsProduct {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  data.allDatoCmsConcept.edges.map(({ node }) => {
    createPage({
      path: `/work/concept/${node.slug}`,
      component: path.resolve("./src/templates/detail.js"),
      context: {
        slug: node.slug,
        isConcept: true,
        isProduct: false,
        isEvent: false,
      },
    })
  })


  data.allDatoCmsProduct.edges.map(({ node }) => {
    createPage({
      path: `/work/product/${node.slug}`,
      component: path.resolve("./src/templates/detail.js"),
      context: {
        slug: node.slug,
        isConcept: false,
        isProduct: true,
        isEvent: false,
      },
    })
  })


  data.allDatoCmsEvent.edges.map(({ node }) => {
    createPage({
      path: `/work/event/${node.slug}`,
      component: path.resolve("./src/templates/detail.js"),
      context: {
        slug: node.slug,
        isConcept: false,
        isProduct: false,
        isEvent: true,
      },
    })
  })
}
