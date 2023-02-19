import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// import 'bootstrap/dist/js/bootstrap.bundle.js';
import "../../assets/admin/css/styles.css";
// import "../../../assets/admin/js/datatables-simple-demo";

// import "../../../assets/admin/js/scripts";

import routes from "../../routes/routes";
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

// import routes from '../../routes/routes';
const Masterpage = () => {
    return (
        <div className="sb-nav-fixed">
            <Navbar />
            <div id="layoutSidenav">

                <div id="layoutSidenav_nav">
                    <Sidebar />
                </div>

                <div id="layoutSidenav_content">
                    <main>


                        {/* <Switch>
                            {routes.map((route, idx) => {
                                return (
                                    route.component && (
                                        <Route
                                            key={idx}
                                            path={route.path}
                                            exact={route.exact}
                                            name={route.name}
                                            render={(props) => (
                                                <route.component {...props} />
                                            )}
                                        />
                                    )
                                );
                            })}
                            <Redirect from="/admin" to="/admin/dashboard" />
                        </Switch> */}

                    </main>
                    <Footer />
                </div>

            </div>
        </div>
    );
};

export default Masterpage;