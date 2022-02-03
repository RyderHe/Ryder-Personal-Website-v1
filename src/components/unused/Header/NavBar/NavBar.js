import "./NavBar.css";

import { Link } from "react-router-dom";

const NavBar = () => {

  return (
    <nav id="nav-wrap">
    
      {/* <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a> */}

      {/* <ul id="nav" className="nav">
        <li key="1"><a href="#home" key="1" onClick={onClickLink}>Home</a></li>
        <li key="2"><a href="#about" onClick={onClickLink}>About</a></li>
        <li key="3"><a href="#resume" onClick={onClickLink}>Resume</a></li>
        <li key="4"><a href="#portfolio" onClick={onClickLink}>Works</a></li>
      </ul> */}
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/resume">Resume</Link>

    </nav>
  )
}

export default NavBar;