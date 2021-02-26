import React, { useState } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NewsItem from "../components/NewsItem"
import NewsItemModal from "../components/NewsItemModal"

const NewsItemSeparator = () => <hr className="news-item-separator"></hr>

const News = ({ data }) => {
  const [selectedItem, setSelectedItem] = useState(null)
  const handleClick = newsItem => {
    setSelectedItem(newsItem)
  }
  const resetSelection = () => {
    setSelectedItem(null)
  }

  const items = data.allDatoCmsNews.edges
    .sort((a, b) => (new Date(a.node.date) <= new Date(b.node.date) ? 1 : -1))
    .map(({ node }, i) => (
      <NewsItem newsItem={node} key={i} handleClick={handleClick} />
    ))
    .reduce(
      (acc, elem) => [
        ...acc,
        elem,
        <NewsItemSeparator key={elem.key + 1000} />,
      ],
      []
    )
  return (
    <Layout pageTitle={"News"}>
      <SEO title="News" />
      <div className="news-item-container">
        {items}
        {selectedItem && (
          <NewsItemModal
            newsItem={selectedItem}
            resetSelection={resetSelection}
          />
        )}
      </div>
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
            fluid {
              ...GatsbyDatoCmsFluid
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
