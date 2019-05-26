import React from "react";

// Stateless Functional Component because it contains no state and only the render method.
// Can use this instead of class.

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbgar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
}

export default NavBar;
