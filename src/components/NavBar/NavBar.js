import "./NavBar.css";
import { NavLink, useLocation } from "react-router-dom";

const NavBar = () => {
  
  const location = useLocation();

  return (
    <nav className={location.pathname !== "/" ?  "opaque" : ""}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/resume">Resume</NavLink>
    </nav>
  )
}

export default NavBar;