import React from "react";

function New() {
  return (
    <section id="new" className="w-100">
      <div className="row p-0 m-0">
        {/* <!--One--> */}
        <div className="one col-lg-4 col-md-12 col-sm-12 p-0">
          <img className="img-fluid" src={require("../../images/1.jpg")} />
          <div className="details">
            <h2>Food for Freshwater Fish</h2>
            <button className="text-uppercase">Shop Now</button>
          </div>
        </div>

        {/* <!--Two--> */}
        <div className="one col-lg-4 col-md-12 col-sm-12 p-0">
          <img className="img-fluid" src={require("../../images/2.jpg")} />
          <div className="details">
            <h2>External Filters</h2>
            <button className="text-uppercase">Shop Now</button>
          </div>
        </div>

        {/* <!--Three--> */}
        <div className="one col-lg-4 col-md-12 col-sm-12 p-0">
          <img className="img-fluid" src={require("../../images/3.jpg")} />
          <div className="details">
            <h2>Goldfish 50% OFF</h2>
            <button className="text-uppercase">Shop Now</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default New;
