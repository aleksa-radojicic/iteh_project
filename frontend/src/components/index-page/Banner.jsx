import React from "react";
import { Link } from "react-router-dom";
function Banner() {

 

  return (
    <section id="banner" className="my-5 py-5">
      <div className="container">
        <h4>NEW AUTUMN BARGAIN</h4>
        <h1>
          Check our new collection of corals <br /> UP to 30% OFF for registered
          users
        </h1>
        <Link to="/shop"><button className="text-uppercase">Shop Now</button></Link>
      </div>
    </section>
  );
}

export default Banner;
