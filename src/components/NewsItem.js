import React from "react"

import Img from "gatsby-image"


const NewsItem = ({ newsItem }) => {
    return <div className="news-item">
        <h1 className="news-item-title">{newsItem.title}</h1>
        <strong className="news-item-location">{newsItem.location}</strong>
        <strong className="news-item-date">{newsItem.date}</strong>
        <div className="news-item-img-container"><Img fixed={newsItem.image.fixed}/></div>
        <div className="news-item-body" dangerouslySetInnerHTML={{__html: newsItem.bodyNode.childMarkdownRemark.html}}></div>
    </div>
}

export default NewsItem;
