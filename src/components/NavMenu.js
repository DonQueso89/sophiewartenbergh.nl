import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

const SubMenu = ({ title, className, children, location, slug }) => {
  const [isOpen, setOpen] = useState(false)
  const isActive = location && location.pathname.includes(slug)
  
  useEffect(() => {
    isActive && setOpen(true)
  }, [isActive])

  return (
    <li>
      <a className={isActive ? "active-link" : ""} onClick={() => setOpen(o => !o)}>
        {title}
      </a>
      {isOpen && (
        <ul type="none" className={className}>
          {children.map(child => (
            <li>{child}</li>
          ))}
        </ul>
      )}
    </li>
  )
}

const NavMenu = ({ location }) => {
  return (
    <nav className="side-menu">
      <ul type="none">
        <SubMenu title={"Work"} className={"outer-menu"} location={location} slug={"work"}>
          <SubMenu title={"Events"} className={"sub-menu"} location={location} slug={"events"}>
            <a href="#">Schnibbelaar</a>
            <a href="#">NippelTribbie</a>
          </SubMenu>
          <SubMenu title={"Concept"} className={"sub-menu"} location={location} slug={"concept"}>
            <Link activeClassName="active-link" partiallyActive={true} to="/work/concept/fuli-carpets">Fuli carpets</Link>
            <Link activeClassName="active-link" partiallyActive={true} to="">Graumie?</Link>
          </SubMenu>
          <SubMenu title={"Product"} className={"sub-menu"} location={location} slug={"product"}>
            <a href="#">Gribben</a>
            <a href="#">Schlaam</a>
            <a href="#">Krebbels</a>
          </SubMenu>
        </SubMenu>
        <li>
          <Link activeClassName="active-link" to="/news" >News</Link>
        </li>
        <li>
          <Link activeClassName="active-link" to="/bio" >Bio</Link>
        </li>
        <li>
          <Link activeClassName="active-link" to="/contact" >Contact</Link>
        </li>
      </ul>
    </nav>
  )
}
export default NavMenu
