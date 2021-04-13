import React, { useState, useRef, useEffect } from "react"

import Img from "gatsby-image"


const ImageCarousel = ({ fluidImages }) => {
  const [curIdx, setIdx] = useState(null)
  const [curDelta, setDelta] = useState(0);
  const refs = useRef([]);
  const parentRef = useRef(null);
  const parent = parentRef && parentRef.current && parentRef.current.getBoundingClientRect() || null
  const parentX = parent && parent.left + parent.width / 2
  
  const selected = refs.current.length && refs.current[curIdx] && refs.current[curIdx].getBoundingClientRect() || null
  const selectedX = selected && selected.left + selected.width / 2
  const delta = parentX - selectedX;

  useEffect(() => {
    setDelta(d => d+delta);
  }, [curIdx]);
  
  useEffect(() => {
    setIdx(0);
  }, []);

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
      ref={el => refs.current[idx] = el}
      style={{transform: `translateX(${curDelta}px)`}}
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
    <div className="carousel" ref={parentRef}>
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
