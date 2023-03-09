import axios from "axios";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function NavBar({ token, setToken, setLoggedUser }) {
  //needed so that NavBar doesn't show on admin routes
  const location = useLocation();

  let navigate = useNavigate();

  function handleLogout() {
    axios.post("api/logout")
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        window.sessionStorage.setItem("auth_token", "");
        console.log(response.data);


        setLoggedUser([]);

        //delete token
        setToken();
        navigate("/?successfuly_logged_out");
      })
      .catch(function (error) {
        console.log(error);
        alert("Couldn't log out.");
        navigate("/");
      });
  }
  if (location.pathname.includes("admin")) {
    return null;
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 mb-2 ">
      <div className="container">
        <Link to='/'>
          <img
            className="logo"
            src={require("../../images/logo krug.png")}
            // src={require("../../images/wallpaper logo krug.png")}
            alt="logo"
          />
        </Link>
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
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/shop" className="nav-link">
                Shop
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact us
              </Link>
            </li>
            {token == null ? (
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" onClick={handleLogout}>
                    Logout
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/account">
                    <i className="fas fa-user"></i>
                  </Link>
                </li>
              </>
            )}

            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                <i className="fas fa-shopping-cart"></i>
              </Link>

            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
