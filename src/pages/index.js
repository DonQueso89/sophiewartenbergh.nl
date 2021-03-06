import React from "react"

import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import useProjects from "../hooks/useProjects"
import { Link } from "gatsby"

const IndexPage = () => {
  const projects = useProjects().filter(x => x.frontpagePictures && x.frontpagePictures.length)
  const [r1,  r2] = [Math.random(), Math.random()]
  const numProjects = projects.length
  const project = projects[Math.floor(r1 * numProjects)]
  const picture = project.frontpagePictures[Math.floor(r2 * project.frontpagePictures.length)]
  return <Layout>
    <SEO title="Home" />
    <div className="frontpage-img-container">
      <Img className="frontpage-img" fluid={picture.fluid} />
    </div>
      <Link to={project.slug}><h2 className="frontpage-title">{project.title}</h2></Link>
  </Layout>
}

export default IndexPage
