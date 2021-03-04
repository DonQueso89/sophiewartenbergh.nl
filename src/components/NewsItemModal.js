import React from "react"
import SEO from "../components/seo"
import Img from "gatsby-image"


const NewsItemModal = ({ newsItem, resetSelection }) => {
  return (
    <div className="news-item-modal" onClick={resetSelection}>
      <SEO title={newsItem.title} />
      <div className="news-item-modal-inner-container">
        <h1>{newsItem.title}</h1>
        <i style={{marginBottom: "10px"}}>{newsItem.location}, {newsItem.date}</i>
        <div className="news-item-modal-content-container">
          <div className="news-item-modal-img-container">
              <Img fixed={newsItem.image.fixed}/>
          </div>
          <div className="news-item-modal-content"
            dangerouslySetInnerHTML={{
              __html: newsItem.bodyNode.childMarkdownRemark.html,
            }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default NewsItemModal
