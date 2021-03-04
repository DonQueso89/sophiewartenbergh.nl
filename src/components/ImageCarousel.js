import React, { useState } from "react"

import Img from "gatsby-image"

const ImageCarousel = ({ fluidImages }) => {
  const [curIdx, setIdx] = useState(0)
  const payload = fluidImages.map((img, idx) => (
    <Img
      key={idx}
      style={{ display: idx === curIdx ? "block" : "none", maxHeight: "70vh", maxWidth: "100%", height: "100%", width: "auto", objectFit: "contain" }}
      fluid={img.fluid}
    />
  ))
  const thumbnails = fluidImages.map((img, idx) => (
    <div
      key={idx}
      onClick={() => setIdx(idx)}
      className={"thumbnail" + (idx === curIdx ? " active-thumbnail" : "")}
    >
      <Img fluid={img.fluid} fadeIn={true} />
    </div>
  ))
  const maxIdx = payload.length

  const setPrev = () => {
    setIdx(idx => {
      const nidx = idx - 1
      return nidx < 0 ? maxIdx + nidx : nidx
    })
  }
  const setNext = () => {
    setIdx(idx => ++idx % maxIdx)
  }

  return (
    <div className="carousel">
      {payload}
      <a className="next-btn slider-btn" onClick={setNext}>
        &#10095;
      </a>
      <a className="prev-btn slider-btn" onClick={setPrev}>
        &#10094;
      </a>
      <div className="slider-thumbnails">{thumbnails}</div>
    </div>
  )
}

export default ImageCarousel
