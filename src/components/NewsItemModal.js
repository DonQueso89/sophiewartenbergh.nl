import React, { useRef, useEffect } from "react"
import SEO from "../components/seo"
import NewsItem from "./NewsItem";

const NewsItemModal = ({ newsItem, resetSelection }) => {
  const titleRef = useRef()
  useEffect(() => {
    titleRef.current.scrollIntoView({ behavior: "smooth", block: "end" })
  })

  return (
    <div
      className="news-item-modal"
      onClick={resetSelection}
    >
      <SEO title={newsItem.title} />
      <div className="news-item-modal-inner-container">
        <NewsItem newsItem={newsItem} titleRef={titleRef} fullView={true}/>
      </div>
    </div>
  )
}

export default NewsItemModal
