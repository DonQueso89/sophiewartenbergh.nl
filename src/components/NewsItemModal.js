import React from "react"
import ImageCarousel from "../components/ImageCarousel"
import SEO from "../components/seo"


const NewsItemModal = ({ newsItem, resetSelection }) => {
  return (
    <div className="news-item-modal" onClick={resetSelection}>
      <SEO title={newsItem.title} />
      <div style={{ width: "90%", marginBottom: 20 }}>
        <ImageCarousel fluidImages={[newsItem.image]} />
      </div>
      <div>
      <h2>{newsItem.title}</h2>
            <strong style={{float: "left"}}>{newsItem.location}</strong>
            <strong style={{float:"right"}}>{newsItem.date}</strong>
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: newsItem.bodyNode.childMarkdownRemark.html,
        }}
      ></div>
    </div>
  )
}

export default NewsItemModal
