import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <ul class="nav nav-pills nav-fill">
      <li class="nav-item">
        <NavLink exact to="/" className="nav-link">
          <div>Home</div>
        </NavLink>
      </li>
      <li class="nav-item">
        <NavLink exact to="/faq" className="nav-link">
          <div>Faq</div>
        </NavLink>
      </li>
      <li class="nav-item">
        <NavLink exact to="/regulations" className="nav-link">
          <div>Regulamin</div>
        </NavLink>
      </li>
      <li class="nav-item">
        <NavLink exact to="/contact" className="nav-link">
          <div>Kontakt</div>
        </NavLink>
      </li>
    </ul>
  );
};

export default Header;
