import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleInput(e) {
    let newUser = user;
    newUser[e.target.name] = e.target.value;
    // console.log(e);
    setUser(newUser);
  }
  function handleRegister(e) {
    e.preventDefault();
    axios
      .post("api/register", user)
      .then((res) => {
        if (res.data.success === true) {
          console.log(res.data);
          alert("Successful registration.");
          navigate("/login");
        } else {
          let error_messages = res.data.errors;
          console.log(error_messages);

          const errors_to_display = Object.values(error_messages).join("\n");

          alert(errors_to_display);
        }
      })
      .catch((e) => {
        console.log(e.response.data);
        alert("Couldn't register. Please try again later.");
      });
  }
  return (
    <>
      <section className="my-5 py-5">
        <div className="container text-center mt-3 pt-5">
          <h2 className="form-weight-bold">Registration</h2>
          <hr className="mx-auto" />
        </div>
        <div className="mx-auto container">
          <form id="register-form" onSubmit={handleRegister}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                onInput={(e) => handleInput(e)}
                className="form-control"
                id="register-name"
                name="name"
                placeholder="Name"
                required
              />
            </div>

            <div className="form-group">
              <p id="emailStatus"></p>
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                onInput={(e) => handleInput(e)}
                className="form-control"
                id="register-email"
                name="email"
                placeholder="Email"
                required
              />
            </div>

            <div style={{ color: "red" }} className="form-group">
              <p id="passwordStatus"></p>
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                onInput={(e) => handleInput(e)}
                className="form-control"
                id="register-password"
                name="password"
                placeholder="Password"
                required
              />
            </div>

            {/* <div style={{ color: "red" }} className="form-group">
                                <p id="passwordsMatchStatus"></p>
                            </div>

                            <div className="form-group">
                                <label>Confirm Password</label>
                                <input type="password"  className="form-control" id="register-confirm-password" name="confirmPassword" placeholder="Confirm Password" required />
                            </div> */}
            <div className="form-group">
              <input
                type="submit"
                className="btn"
                id="register-btn"
                name="register"
                value="Register"
              />
            </div>
            <div className="form-group">
              <Link className="btn url-link" to="/login">
                If you have account, please login.
              </Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;
