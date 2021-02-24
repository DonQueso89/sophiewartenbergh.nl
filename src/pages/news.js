import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NewsItem from "../components/NewsItem"

const NewsItemSeparator = () => <hr className="news-item-separator"></hr>

const News = ({ data }) => {
  const items = data.allDatoCmsNews.edges
    .sort((a, b) => (new Date(a.node.date) <= new Date(b.node.date) ? 1 : -1))
    .map(({ node }, i) => <NewsItem newsItem={node} key={i} />)
    .reduce((acc, elem) => [...acc, elem, <NewsItemSeparator />], [])
  return (
    <Layout pageTitle={"News"}>
      <SEO title="News" />
      {items}
    </Layout>
  )
}

export default News

export const query = graphql`
  query q {
    allDatoCmsNews {
      edges {
        node {
          bodyNode {
            childMarkdownRemark {
              html
            }
          }
          image {
            fixed(height: 200, width: 200) {
              ...GatsbyDatoCmsFixed
            }
          }
          date
          title
          location
        }
      }
    }
  }
`
