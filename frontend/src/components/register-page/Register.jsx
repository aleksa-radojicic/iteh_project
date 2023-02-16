import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
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
        axios.post("api/register", user).then((res) => {
            console.log(res.data);
            navigate("/login");
        }).catch((e) => {
            console.log(e.response.data);
            // console.log(e.response.data.password);
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
                            <input type="text" onInput={(e) => handleInput(e)} className="form-control" id="register-name" name="name" placeholder="Name" required />
                        </div>

                        <div className="form-group">
                            <p id="emailStatus"></p>
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" onInput={(e) => handleInput(e)} className="form-control" id="register-email" name="email" placeholder="Email" required />
                        </div>

                        <div style={{ color: "red" }} className="form-group">
                            <p id="passwordStatus"></p>
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" onInput={(e) => handleInput(e)} className="form-control" id="register-password" name="password" placeholder="Password" required />
                        </div>

                        {/* <div style={{ color: "red" }} className="form-group">
                                <p id="passwordsMatchStatus"></p>
                            </div>

                            <div className="form-group">
                                <label>Confirm Password</label>
                                <input type="password"  className="form-control" id="register-confirm-password" name="confirmPassword" placeholder="Confirm Password" required />
                            </div> */}
                        <div className="form-group">
                            <input type="submit" className="btn" id="register-btn" name="register" value="Register" />
                        </div>
                        <div className="form-group">
                            <Link to="/login">
                                If you have account, please login!
                            </Link>
                        </div>
                    </form>
                </div>


            </section>





        </>
    );
};

export default Register;