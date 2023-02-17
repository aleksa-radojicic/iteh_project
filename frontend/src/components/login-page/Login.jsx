import React, { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Login = ({ logged_user, on_login, addToken }) => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  function handleInput(e) {
    let newUser = user;
    newUser[e.target.name] = e.target.value;
    // console.log(e);
    setUser(newUser);
  }
  function handleLogin(e) {
    e.preventDefault();
    axios.post("api/login", user).then((res) => {
      // console.log(res.data);
      if (res.data.success === true) {
        window.sessionStorage.setItem('auth_token', res.data.access_token);
        addToken(res.data.access_token);
        console.log("SUCCESS");
        console.log(res.data.user);
        on_login(res.data.user);
        // console.log(logged_user);
        navigate("/");

      } else {
        console.log("FAILURE");
      }
    })
      .catch((e) => {
        console.log(e.response.data);
      });
  }

  // function handleLogin(e) {
  //     e.preventDefault();
  //     axios.post("api/login", user).then((res) => {
  //         console.log(res.data);
  //         if (res.data.success === true) {
  //             window.sessionStorage.setItem('auth_token', res.data.access_token);
  //         }
  //     }).catch((e) => {
  //         console.log(e.response.data);
  //     });

  // }
  return (
    <section className="my-5 py-5">
      <div className="container text-center mt-3 pt-5">
        <h2 className="form-weight-bold">Login</h2>
        <hr className="mx-auto" />
      </div>
      <div className="mx-auto container">
        <form id="login-form" onSubmit={handleLogin} >
          <div className="form-group">
            <p style={{ color: "red" }} id="loginStatus"></p>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="text" className="form-control" onInput={(e) => handleInput(e)} id="login-email" name="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" onInput={(e) => handleInput(e)} id="login-password" name="password" placeholder="Password" required />
          </div>
          <div className="form-group">
            <input type="submit" className="btn" id="login-btn" name="login_btn" value="Login" />
          </div>
          <div className="form-group">
            <Link className="nav-link" to="/register">
              Don't have an account? Register
            </Link>
          </div>
        </form>
      </div>


    </section>
  );
};

export default Login;
