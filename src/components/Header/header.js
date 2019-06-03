import React from "react";
import { NavLink } from "react-router-dom";

import "./header.css";

const Header = props => {
  return (
    <div>
      <nav>
        <div>PetaBajt</div>
        <NavLink exact to="/home" activeClassName="active">
          Home
        </NavLink>
        <NavLink exact to="/faq" activeClassName="active">
          Faq
        </NavLink>
        <NavLink exact to="/regulations" activeClassName="active">
          Regulamin
        </NavLink>
        <NavLink exact to="/contact" activeClassName="active">
          Kontakt
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;

