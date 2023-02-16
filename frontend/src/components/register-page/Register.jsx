import React from 'react';

const Register = () => {
    return (
        <>




            <body>


                <section className="my-5 py-5">
                    <div className="container text-center mt-3 pt-5">
                        <h2 className="form-weight-bold">Registration</h2>
                        <hr className="mx-auto" />
                    </div>
                    <div className="mx-auto container">
                        <form id="register-form" method="POST" action="register.php">
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" className="form-control" id="register-name" name="name" placeholder="Name" required />
                            </div>

                            <div className="form-group">
                                <p id="emailStatus"></p>
                            </div>

                            <div className="form-group">
                                <label>Email</label>
                                <input type="text" className="form-control" id="register-email" name="email" placeholder="Email" required />
                            </div>

                            <div style={{ color: "red" }} className="form-group">
                                <p id="passwordStatus"></p>
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" id="register-password" name="password" placeholder="Password" required />
                            </div>

                            <div style={{ color: "red" }} className="form-group">
                                <p id="passwordsMatchStatus"></p>
                            </div>

                            <div className="form-group">
                                <label>Confirm Password</label>
                                <input type="password" className="form-control" id="register-confirm-password" name="confirmPassword" placeholder="Confirm Password" required />
                            </div>
                            <div className="form-group">
                                <input type="submit" className="btn" id="register-btn" name="register" value="Register" />
                            </div>
                            <div className="form-group">
                                <a id="login-url" href="login.php" className="btn">Do you have an account? Login</a>
                            </div>
                        </form>
                    </div>


                </section>



                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
                <script src="assets/js/registration_script.js"></script>
            </body>


        </>
    );
};

export default Register;