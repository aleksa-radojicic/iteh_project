import React from 'react'
import { Link } from "react-router-dom";


function Home() {
  

  return (
    <section id="home">
      <div class="container mt-0 pt-0" >
        <h5>Aquarium Keep</h5>
        <h1>
          <span>Affordable Prices</span>
        </h1>
        <p>
          We offer quality freshwater and marine aquaristic products for
          everyone's taste and wallet.
        </p>
        <Link to=""><button>Shop Now</button></Link>
      </div>
    </section >
  );
}

export default Home;