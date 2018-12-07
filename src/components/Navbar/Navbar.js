import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => (
  <header>
    <div className="container">
      <nav>
        <ul className="main-nav">
          <li>
            <NavLink exact to="/">
              <span> Main Page</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/secondPage">Second Page</NavLink>
          </li>
          <li>
            <NavLink to="/thirdPage">Third Page</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Navbar;
