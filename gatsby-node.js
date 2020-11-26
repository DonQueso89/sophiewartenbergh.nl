const path = require("path")

exports.createPages = async ({ actions, graphql}) => {
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
        }
    `)

    data.allDatoCmsConcept.edges.map(({ node }) => {
        createPage({
            path: `/work/concept/${node.slug}`,
            component: path.resolve("./src/templates/detail.js"),
            context: { slug: node.slug }
        })
    })
}