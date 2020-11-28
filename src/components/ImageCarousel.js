import React, { useState } from "react"

import Img from "gatsby-image"

const ImageCarousel = ({ fluidImages }) => {
  const [curIdx, setIdx] = useState(0)
  const payload = fluidImages.map((img, idx) => (
    <Img
      style={{ display: idx === curIdx ? "block" : "none" }}
      fluid={img.fluid}
    />
  ))
  const thumbnails = fluidImages.map((img, idx) => (
    <div
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
