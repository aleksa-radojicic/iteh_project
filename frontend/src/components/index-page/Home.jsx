import React from 'react';

import { useNavigate, } from "react-router-dom";

function Home() {
  

  return (
    <section id="home">
      <div className="container mt-0 pt-0" >
        <h5>Aquarium Keep</h5>
        <h1>
          <span>Affordable Prices</span>
        </h1>
        <p>
          We offer quality freshwater and marine aquaristic products for
          everyone's taste and wallet.
        </p>
        <button onClick={goToShop}>
          Shop now
        </button>
      </div>
    </section >
  );
}

export default Home;