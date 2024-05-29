import React from "react";
import { Link } from "react-router-dom";
import tracewLogo from "../assets/tracew.svg";
import "../styles/NavBar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark fixed-top" id="mainNav">
      <div className="container px-4 px-lg-5">
        <Link className="navbar-brand" to="/">
          <img
            src={tracewLogo}
            width="80"
            height="80"
            className="d-inline-block align-top"
            alt=""
          />
        </Link>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link link-inicio" to="/">
                | Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  className="bi bi-person-circle"
                  viewBox="0 0 20 20"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  <path
                    fillRule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                  />
                </svg>
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const NavbarCollapse = () => {
  return (
    <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link link-inicio" to="/">
            | Inicio
          </Link>
        </li>
        {/* Se eliminó el ítem de Login */}
      </ul>
    </div>
  );
};

export default Navbar;
