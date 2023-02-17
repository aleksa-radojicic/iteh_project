import React, { useState } from "react";
import axios from "axios";

const Login = ({ logged_user, setLoggedUser }) => {
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
    axios
      .post("api/login", user)
      .then((res) => {

        if (res.data["success"] == "true") {
          console.log("SUCCESS");

            setLoggedUser(res.data.user);
        } else {
          console.log("FAILURE");
        }
      })
      .catch((e) => {
        console.log(e.response.data);
      });
  }
  return (
    <section className="my-5 py-5">
      <div className="container text-center mt-3 pt-5">
        <h2 className="form-weight-bold">Login</h2>
        <hr className="mx-auto" />
      </div>
      <div className="mx-auto container">
        <form id="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <p style={{ color: "red" }} id="loginStatus"></p>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              className="form-control"
              onInput={(e) => handleInput(e)}
              id="login-email"
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              onInput={(e) => handleInput(e)}
              id="login-password"
              name="password"
              placeholder="Password"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              className="btn"
              id="login-btn"
              name="login_btn"
              value="Login"
            />
          </div>
          {/* <div className="form-group">
                        <a id="register-url" href="../register-page/Register.jsx" className="btn">Don't have an account? Register</a>
                    </div> */}
        </form>
      </div>
    </section>
  );
};

export default Login;
