import axios from 'axios';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ token, setToken, logged_user, setLoggedUser }) => {
    const navigate = useNavigate();

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
    return (
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">

            <Link className="navbar-brand ps-3" to="/admin/dashboard">ADMIN DASHBOARD</Link>

            <ul className="navbar-nav ms-auto me-0 me-md-3 my-2 my-md-0">
                <li className="nav-item dropdown">
                    <Link to="#" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-user fa-fw"></i></Link>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">

                        <li ><Link className="dropdown-item" onClick={handleLogout}>Logout</Link></li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;