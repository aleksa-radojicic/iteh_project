import React from "react";

function Brand() {
  return (
    <section id="brand" className="container">
      <div className="row">
        <img
          className="img-fluid col-lg-3 col-md-6 col-sm-12"
          src={require("../../images/brand1.jpg")}
          alt='brand4'
        />
        <img
          className="img-fluid col-lg-3 col-md-6 col-sm-12"
          src={require("../../images/brand2.jpg")}
          alt='brand4'
        />
        <img
          className="img-fluid col-lg-3 col-md-6 col-sm-12"
          src={require("../../images/brand3.jpg")}
          alt='brand4'
        />
        <img
          className="img-fluid col-lg-3 col-md-6 col-sm-12"
          src={require("../../images/brand4.jpg")}
          alt='brand4' />
      </div>
    </section>
  );
}

export default Brand;
