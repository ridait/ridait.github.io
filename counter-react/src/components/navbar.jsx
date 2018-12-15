import React from "react";
//Functional stateless componenet
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#home">
        Navbar{" "}
        <span className="badge badge-pill badge-danger">{totalCounters}</span>
      </a>
    </nav>
  );
};
export default NavBar;
