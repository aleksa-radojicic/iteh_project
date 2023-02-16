import React from "react";
import { Link } from "react-router-dom";


function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 mb-2 fixed-top">
      <div className="container">
        <img className="logo" src={require("../../images/logo.jpg")} alt="logo" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse nav-buttons"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>

            <li className="nav-item">
              <Link to="/shop" className="nav-link">Shop</Link>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="localhost:3000">
                Blog
              </a>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>


            <li className="nav-item">
              <a href="localhost:3000">
                <i className="fas fa-shopping-cart"></i>
              </a>
              <a href="localhost:3000">
                <i className="fas fa-user"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav >
  );
}

export default NavBar;
