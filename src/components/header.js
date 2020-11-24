import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import NavMenu from "./NavMenu"

const Metadata = () => {
  return <div className="right-column">Some metadata</div>
}

const Social = () => {
  return (
    <div style={{display: "flex", flexDirection: "column", textAlign: "right"}}>
      <a
        className="regular-link"
        href="https://www.linkedin.com/in/sophie-wartenbergh/"
        target="_blank"
        rel="noreferrer"
      >
        linkedin
      </a>{" "}
      <a
        className="regular-link"
        href="https://www.instagram.com/sophie_wartenbergh/?hl=nl"
        target="_blank"
        rel="noreferrer"
      >
        instagram
      </a>{" "}
    </div>
  )
}

const LanguageSelector = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
      }}
    >
      <p style={{marginRight: "25%"}}>nl</p>
      <p>eng</p>
    </div>
  )
}

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `0.1rem`,
      position: "sticky",
      top: 0,
      opacity: 1,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: "94%",
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <h1>
          <Link
            to="/"
            style={{
              color: `black`,
              textDecoration: `none`,
              flex: 1,
            }}
          >
            Sophie
            <br />
            Wartenbergh
          </Link>
        </h1>
        <div style={{ flex: 3 }} />
        <div style={{ flex: 1 }}>
          <LanguageSelector/>
          <Social />
        </div>
      </div>
      <hr />
      <div className="column-wrapper">
        <NavMenu />
      </div>
      <div className="column-wrapper">
      <Metadata />
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
