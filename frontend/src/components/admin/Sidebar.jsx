import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ logged_user }) => {


    return (
        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
            <div className="sb-sidenav-menu">
                <div className="nav">
                    <div className="sb-sidenav-menu-heading">Core</div>
                    <Link className="nav-link" to="/admin/dashboard">
                        <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                        Dashboard
                    </Link>
                    <div className="sb-sidenav-menu-heading">Product</div>
                    <Link className="nav-link" to="/admin/addProduct">
                        <div className="sb-nav-link-icon"><i class="fa-sharp fa-solid fa-bags-shopping"></i></div>
                        Add Product
                    </Link>
                    <Link className="nav-link" to="/admin/allProducts">
                        <div className="sb-nav-link-icon"><i class="fa-sharp fa-solid fa-bags-shopping"></i></div>
                        View Products
                    </Link>
                    <div className="sb-sidenav-menu-heading">Orders</div>
                    <Link className="nav-link" to="/admin/allOrders">
                        <div className="sb-nav-link-icon"><i class="fa-sharp fa-solid fa-bags"></i></div>
                        View orders
                    </Link>

                </div>
            </div>
            <div className="sb-sidenav-footer">
                <div className="small">Logged in as:</div>
                {logged_user.name}
            </div>

        </nav>
    );
};

export default Sidebar;