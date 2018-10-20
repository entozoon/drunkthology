import React from "react";
import { Link } from "react-router-dom";

import NavLink from "./NavLink";
import "./Nav.css";

export default ({ handlePopupOpen }) => (
  <nav className="Nav">
    <div className="Nav--Container container">
      <NavLink to="/" exact>
        Home
      </NavLink>
      <NavLink to="/about/" exact>
        About
      </NavLink>
      <NavLink to="/contact/" exact>
        Contact
      </NavLink>
    </div>
  </nav>
);
