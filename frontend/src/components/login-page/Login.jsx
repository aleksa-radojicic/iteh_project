import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import swal from "sweetalert";

const Login = ({ setLoggedUser, addToken }) => {
  let navigate = useNavigate();

  const INITIAL_FORM_STATE = {
    email: "",
    password: "",
  };

  const [form, setForm] = useState(INITIAL_FORM_STATE);

  const [loginStatus, setLoginStatus] = useState();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  function handleLogin(e) {
    e.preventDefault();

    let user = form;

    axios
      .post("api/login", user)
      .then((res) => {

        if (res.data.success === true) {
          window.sessionStorage.setItem("auth_token", res.data.access_token);
          addToken(res.data.access_token);
          console.log("SUCCESS");
          console.log(res.data.user);

          setLoginStatus();
          setLoggedUser(res.data.user);

          swal("Successfully logged in");

          if (res.data.user.user_type === "admin") {
            navigate("/admin/dashboard");
          } else {
            navigate("/account");
          }
        } else {
          // console.log(res.data);
          //display that credentials are incorrect
          setLoginStatus(res.data.message);
        }
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(setForm(INITIAL_FORM_STATE));
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
            <p style={{ color: "red" }} id="loginStatus">
              {loginStatus}
            </p>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              className="form-control"
              onChange={handleChange}
              id="login-email"
              name="email"
              placeholder="Email"
              required
              value={form.email}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              onInput={handleChange}
              id="login-password"
              name="password"
              placeholder="Password"
              required
              value={form.password}
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
          <div className="form-group">
            <Link to="/register" className="btn url-link">
              Don't have an account? Register
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
