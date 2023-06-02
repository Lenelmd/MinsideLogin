import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section class="navbarSection">
      <Link className="Navbarlink" to="/">
        Login
      </Link>
      <Link className="Navbarlink" to="minside">
        Min Side
      </Link>
    </section>
  );
};

export default Navbar;
