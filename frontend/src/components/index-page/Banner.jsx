import React from "react";
import { useNavigate,} from "react-router-dom";

function Banner() {

  let navigate = useNavigate();
  function goToShop() {
    navigate('/shop');
  }

  return (
    <section id="banner" className="my-5 py-5">
      <div className="container">
        <h4>NEW AUTUMN BARGAIN</h4>
        <h1>
          Check our new collection of corals <br /> UP to 30% OFF for registered
          users
        </h1>
        <button className="text-uppercase" onClick={goToShop}>Shop Now</button>
      </div>
    </section>
  );
}

export default Banner;
