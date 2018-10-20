import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.scss";

export default () => (
  <nav>
    <NavLink to="/" exact>
      Home
    </NavLink>
    <NavLink to="/about/" exact>
      About
    </NavLink>
    <NavLink to="/contact/" exact>
      Contact
    </NavLink>
  </nav>
);
