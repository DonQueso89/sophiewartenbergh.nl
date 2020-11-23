import React, { useState } from "react"
import { Link } from "gatsby"

const SubMenu = ({ title, children }) => {
  const [isOpen, setOpen] = useState(false)
  return (
    <li>
      <a href="#" onClick={() => setOpen(o => !o)}>{title}</a>
      {isOpen && 
      <ul type="none">
        {children.map(child => <li>{child}</li>)}
      </ul>}
    </li>
  )
}

const NavMenu = () => {
  return (
    <nav className="side-menu">
      <ul type="none">
        <li>
          <Link to="/">Home</Link>
        </li>
            <SubMenu title={"Work"}>
              <a href="#">Events</a>
              <SubMenu title={"Projects"}>
                <a href="#">KRemmKRemm</a>
                <a href="#">Graumie?</a>
              </SubMenu>
            <SubMenu title={"Fribbels"} >
                <a href="#">Gribben</a>
                <a href="#">Schlaam</a>
                <a href="#">Krebbels</a>
            </SubMenu>
            </SubMenu>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  )
}
export default NavMenu
