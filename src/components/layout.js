import React from "react"
import { Link } from "gatsby"
import "../utils/css/components/layout.css"

const Layout = props => {
  const { title, children } = props
  const [toggleNav, setToggleNav] = React.useState(false)
  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <header className="site-head">
        <div className="site-head-container">
          <a
            className="nav-burger"
            href={`#`}
            onClick={() => setToggleNav(!toggleNav)}
          >
            <div
              className="hamburger hamburger--collapse"
              aria-label="Menu"
              role="button"
              aria-role="navigation"
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </a>
          <nav className="site-head-left">
            <ul className="nav" role="menu">
              <li className="nav-about" role="menuitem">
                <Link to={`/about`}>About</Link>
              </li>
              <li className="nav-team" role="menuitem">
                <Link to={`/team`}>Team</Link>
              </li>
            </ul>
          </nav>
          <div className="site-head-center">
            <Link className="site-head-logo" to={`/`}>
              Victory360
            </Link>
          </div>
          <nav className="site-head-right">
            <ul className="nav" role="menu">
              <li className="nav-services" role="menuitem">
                <Link to={`/services`}>Services</Link>
              </li>
              <li className="nav-contact" role="menuitem">
                <Link to={`/contact`}>Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main id="site-main" className="site-main">
        <div className="transition-fade">{children}</div>
      </main>
      <footer className="site-foot">
        &copy; {new Date().getFullYear()} <Link to={`/`}>{title}</Link> &mdash;
        Built with{" "}
        <span
          role="img"
          aria-label="heart"
          style={{ fontSize: "1.5rem", marginRight: "15px" }}
        >
          ❤️
        </span>
      </footer>
    </div>
  )
}

export default Layout
