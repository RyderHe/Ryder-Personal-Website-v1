import "./NavBar.css";
import { NavLink, useLocation } from "react-router-dom";

const NavBar = () => {
  
  const location = useLocation();

  return (
    <nav className={location.pathname !== "/" ?  "opaque" : ""}>
    
      {/* <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a> */}

      {/* <ul id="nav" className="nav">
        <li key="1"><a href="#home" key="1" onClick={onClickLink}>Home</a></li>
        <li key="2"><a href="#about" onClick={onClickLink}>About</a></li>
        <li key="3"><a href="#resume" onClick={onClickLink}>Resume</a></li>
        <li key="4"><a href="#portfolio" onClick={onClickLink}>Works</a></li>
      </ul> */}
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/resume">Resume</NavLink>

    </nav>
  )
}

export default NavBar;