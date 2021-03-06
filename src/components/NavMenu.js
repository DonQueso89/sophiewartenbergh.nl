import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import useSlugs from "../hooks/useSlugs"

const SubMenu = ({ title, className, children, location, slug }) => {
  const [isOpen, setOpen] = useState(false)
  const isActive = location && location.pathname.includes(slug)
  
  useEffect(() => {
    isActive && setOpen(true)
  }, [isActive])

  return (
    <li>
      <a className={isActive || isOpen ? "active-link" : ""} onClick={() => setOpen(o => !o)} dangerouslySetInnerHTML={{__html: title}}>
      </a>
      {isOpen && (
        <ul type="none" className={className}>
          {children.map(child => (
            <li className="nav-entry">{child}</li>
          ))}
        </ul>
      )}
    </li>
  )
}

const NavMenu = ({ location }) => {
  const [conceptSlugs, productSlugs, eventSlugs] = useSlugs();
  const conceptLinks = conceptSlugs.map((e,i) => <Link activeClassName="active-link" partiallyActive={true} to={`/work/concept/${e.slug}`} key={i}>{e.title}</Link>)
  const productLinks = productSlugs.map((e,i) => <Link activeClassName="active-link" partiallyActive={true} to={`/work/product/${e.slug}`} key={i}>{e.title}</Link>)
  const eventLinks = eventSlugs.map((e,i) => <Link activeClassName="active-link" partiallyActive={true} to={`/work/event/${e.slug}`} key={i}>{e.title}</Link>)
  return (
    <nav className="side-menu">
      <ul type="none">
        <SubMenu title={"Work"} className={"outer-menu"} location={location} slug={"work"}>
          <SubMenu title={"Events"} className={"sub-menu"} location={location} slug={"event"}>
            {eventLinks}
          </SubMenu>
          <SubMenu title={"Concept"} className={"sub-menu"} location={location} slug={"concept"}>
            {conceptLinks}
          </SubMenu>
          <SubMenu title={"Product"} className={"sub-menu"} location={location} slug={"product"}>
            {productLinks}
          </SubMenu>
        </SubMenu>
        <li>
          <Link activeClassName="active-link" to="/news" >News</Link>
        </li>
        <li>
          <Link activeClassName="active-link" to="/bio" >Vision</Link>
        </li>
        <li>
          <Link activeClassName="active-link" to="/contact" >About</Link>
        </li>
      </ul>
    </nav>
  )
}
export default NavMenu
