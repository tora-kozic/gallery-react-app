import React from "react";
import { Link, NavLink } from "react-router-dom";

const links = [
  { name: "Home", path: "/" },
  { name: "Works", path: "/works" },
  { name: "About", path: "/about" },
  { name: "Store", path: "/store" },
];

// Stateless Functional Component
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container-fluid">
        <a
          className="navbar-brand text-capitalize font-weight-light px-3"
          href="#"
        >
          Tora Kozic
        </a>
        <ul className="nav masthead-nav mr-auto">
          {links.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              exact
              className="text-decoration-none text-lowercase font-weight-light link-light"
            >
              <li className="px-3">{link.name}</li>
            </NavLink>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
