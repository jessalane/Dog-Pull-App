import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar-grid">
      <NavLink to="/" className="navbar-brand">
        Dog Pull App
      </NavLink>
      <ul className="navbar-nav">
        <li>
          <NavLink to="/" className="nav-item">
            Signup
          </NavLink>
        </li>
        <li>
          <NavLink to="/Login" className="nav-item">
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
