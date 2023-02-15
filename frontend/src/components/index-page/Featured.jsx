import React from "react";

function Featured() {
  return (
    <section id="featured" className="my-5 pb-5">
      <div className="container text-center mt-5 py-5">
        <h3>Featured</h3>
        <hr className="mx-auto" />
        <p>Here you can check our featured products</p>
      </div>
      <div className="row mx-auto container-fluid">
        <div className="product text-center col-lg-3 col-md-4 col-sm-12">
          <img className="img-fluid mb-3" src={require("../../images/featured1.jpg")} />

          <div className="star">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>

          <h5 className="p-name">EHEIM reeflexUV 359</h5>
          <h4 className="p-price">$149.99</h4>
          <button className="buy-btn">Buy Now</button>
        </div>

        <div className="product text-center col-lg-3 col-md-4 col-sm-12">
          <img className="img-fluid mb-3" src={require("../../images/featured2.jpg")} />

          <div className="star">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>

          <h5 className="p-name">EHEIM Smart climate controller</h5>
          <h4 className="p-price">$299.99</h4>
          <button className="buy-btn">Buy Now</button>
        </div>

        <div className="product text-center col-lg-3 col-md-4 col-sm-12">
          <img className="img-fluid mb-3" src={require("../../images/featured3.jpg")} />

          <div className="star">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>

          <h5 className="p-name">EHEIM Autofeeder</h5>
          <h4 className="p-price">$39.99</h4>
          <button className="buy-btn">Buy Now</button>
        </div>

        <div className="product text-center col-lg-3 col-md-4 col-sm-12">
          <img className="img-fluid mb-3" src={require("../../images/featured4.jpg")} />

          <div className="star">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>

          <h5 className="p-name">Sera Marine Granules Nature</h5>
          <h4 className="p-price">$5.99</h4>
          <button className="buy-btn">Buy Now</button>
        </div>
      </div>
    </section>
  );
}

export default Featured;
