import React, { useState } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.svg"
import { FaCartArrowDown } from "react-icons/fa"

const links = [
  {
    id: 1,
    path: "/",
    text: "home",
  },
  { id: 2, path: "/about", text: "about" },
]

export const Navbar = () => {
  const [state, setState] = useState({
    navbarOpen: false,
    css: "collapse navbar-collapse",
  })

  const navbarHandler = () => {
    state.navbarOpen
      ? setState({
          navbarOpen: false,
          css: "collapse navbar-collapse",
        })
      : setState({
          navbarOpen: true,
          css: "collapse navbar-collapse show",
        })
  }

  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
      <Link to="/">
        <img src={logo} alt="logo" />
        {/* https://www.iconfinder.com/icons/185113/coffee_streamline_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/webalys */}
      </Link>
      <button className="navbar-toggler" onClick={navbarHandler}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={state.css}>
        <ul className="navbar-nav mx-auto">
          {links.map(link => (
            <li className="nav-item" key={link.id}>
              <Link to={link.path} className="nav-link text-capitalize">
                {link.text}
              </Link>
            </li>
          ))}
          <li className="nav-item ml-sm-5">
            <FaCartArrowDown className="cart-icon" />
          </li>
        </ul>
      </div>
    </nav>
  )
}
