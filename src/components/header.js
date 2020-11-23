import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import NavMenu from "./NavMenu"

const Metadata = () => {
  return <div className="right-column">Some metadata</div>
}

const SocialAndTranslation = () => {
  return <div style={{ flex: 1}}> Kreim</div>
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
              flex: 1
            }}
          >
            Sophie<br/>Wartenbergh
          </Link>
        </h1>
        <div style={{flex: 3}}/>
        <SocialAndTranslation/>
      </div>
      <hr />
      <div className="side-menu-wrapper">
        <NavMenu />
      </div>
      <Metadata />
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
