import React from 'react';
import "../../assets/admin/css/styles.css";
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Dashboard from './Dashboard';

const Masterpage = ({ token, setToken, logged_user, setLoggedUser }) => {
    console.log(token);
    console.log(logged_user);
    return (
        <div className="sb-nav-fixed">
            <Navbar token={token} setToken={setToken} logged_user={logged_user} setLoggedUser={setLoggedUser} />

            <div id="layoutSidenav">


                <div id="layoutSidenav_nav">
                    <Sidebar logged_user={logged_user} />
                </div>

                <div id="layoutSidenav_content">
                    <main>
                        <Dashboard />
                    </main>
                    <Footer />
                </div>

            </div>
        </div>
    );
};

export default Masterpage;