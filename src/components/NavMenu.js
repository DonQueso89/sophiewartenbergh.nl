import React, { useState } from "react"
import { Link } from "gatsby"

const SubMenu = ({ title, className, children }) => {
  const [isOpen, setOpen] = useState(false)
  return (
    <li>
      <a href="#" onClick={() => setOpen(o => !o)}>
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

const NavMenu = () => {
  return (
    <nav className="side-menu">
      <ul type="none">
        <SubMenu title={"Work"} className={"outer-menu"}>
          <a href="#">Events</a>
          <SubMenu title={"Projects"} className={"sub-menu"}>
            <a href="#">KRemmKRemm</a>
            <a href="#">Graumie?</a>
          </SubMenu>
          <SubMenu title={"Fribbels"} className={"sub-menu"}>
            <a href="#">Gribben</a>
            <a href="#">Schlaam</a>
            <a href="#">Krebbels</a>
          </SubMenu>
        </SubMenu>
        <li>
          <a href="#">News</a>
        </li>
        <li>
          <a href="#">Bio</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  )
}
export default NavMenu
