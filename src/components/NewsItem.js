import React from "react"

import Img from "gatsby-image"


const NewsItem = ({ newsItem, handleClick, titleRef=null, fullView=false }) => {
    const extraProps = titleRef && {ref: titleRef} || {}
    const payload = fullView ? newsItem.bodyNode.childMarkdownRemark.html : newsItem.abstract;
    return <div className="news-item">
        <h1 className="news-item-title" onClick={() => handleClick(newsItem)} {...extraProps}>{newsItem.title}</h1>
        <i className="news-item-location-date">{newsItem.date},&nbsp;{newsItem.location}</i>
        <div className="news-item-img-container"><Img fixed={newsItem.image.fixed}/></div>
        <div className="news-item-body" dangerouslySetInnerHTML={{__html: payload }}></div>
    </div>
}

export default NewsItem;
