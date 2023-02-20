import React from "react";

function Footer() {
  return (
    <footer className="footer mt-5 py-5">
      <div className="row container mx-auto pt-5">
        <div className="footer-one col-lg-4 col-md-6 col-sm-12">
          <img className="logo" src={require("../../images/logo.jpg")} alt='logo' />
          <p className="pt-3">We provide the best products for the most affordable prices</p>
        </div>

        <div className="footer-one col-lg-4 col-md-6 col-sm-12 footer-featured">
          <h5 className="pb-2">Categories</h5>
          <ul className="text-uppercase">
            <li><a href="#">aquariums</a></li>
            <li><a href="#">food</a></li>
            <li><a href="#">technical products</a></li>
            <li><a href="#">plants</a></li>
            <li><a href="#">animals</a></li>
          </ul>
        </div>

        <div className="footer-one col-lg-4 col-md-6 col-sm-12 footer-contact">
          <h5 className="pb-2">Contact Us</h5>
          <div>
            <h6 className="text-uppercase">Address</h6>
            <p>165 Kragujevačkih Đaka, Belgrade</p>
          </div>
          <div>
            <h6 className="text-uppercase">Phone</h6>
            <p>+381 63 135 3942</p>
          </div>
          <div>
            <h6 className="text-uppercase">Email</h6>
            <p>info@outlook.com</p>
          </div>
        </div>
      </div>

      <div className="copyright mt-5">
        <div className="row container mx-auto">
          <div className="col-lg-9 col-md-6 col-sm-12 mb-4">
            <p className="text-center">Aquarium Keep ©2022 All Rights Reserved</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4 social-icons">
            <a href="https://www.facebook.com"><i className="fab fa-facebook"></i></a>
            <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
            <a href="https://www.youtube.com"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
