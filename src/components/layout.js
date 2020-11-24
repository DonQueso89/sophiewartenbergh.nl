import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className="main-wrapper">
        <div className="side-column">
        </div>
        <div className="column main-column">{children}</div>
        <div className="side-column">
        </div>
      </div>
      <footer
        style={{
          margin: `2rem`,
        }}
      >
        © {new Date().getFullYear()}, Built by{" "}
        <a href="https://github.com/DonQueso89" target="_blank">
          DonQueso89
        </a>
        {` `}
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
