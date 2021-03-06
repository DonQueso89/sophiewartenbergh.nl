import React, { useRef, useEffect } from "react"
import SEO from "../components/seo"
import Img from "gatsby-image"

const NewsItemModal = ({ newsItem, resetSelection }) => {
  const titleRef = useRef()
  useEffect(() => {
    titleRef.current.scrollIntoView({ behavior: "smooth", block: "end" })
  })

  return (
    <div
      className="news-item-modal"
      style={{ opacity: "95%" }}
      onClick={resetSelection}
    >
      <SEO title={newsItem.title} />
      <div className="news-item-modal-inner-container">
        <h1 ref={titleRef}>{newsItem.title}</h1>
        <i style={{ marginBottom: "10px" }}>
          {newsItem.location}, {newsItem.date}
        </i>
        <div className="news-item-modal-content-container">
          <div className="news-item-modal-img-container">
            <Img fixed={newsItem.image.fixed} />
          </div>
          <div
            className="news-item-modal-content"
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
