import React, { useState } from "react";
import { MenuItems } from "./MenuItem";
import "./Navbar.css";
import { Button } from "../Button";

export const Navbar = () => {
  const [isClicked, setClicked] = useState(false);

  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">
        React<i className="fab fa-react"></i>
      </h1>
      <div className="menu-icon" onClick={() => setClicked(!isClicked)}>
        <i className={isClicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={isClicked ? "nav-menu active" : " nav-menu"}>
        {MenuItems.map((item, index) => (
          <li key={index}>
            <a className={item.cName} href={item.url}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
      <Button>Sign Up</Button>
    </nav>
  );
};
