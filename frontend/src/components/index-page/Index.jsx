import React from "react";
import { Helmet } from "react-helmet";
import Banner from "./Banner";
import Brand from "./Brand";
import Featured from "./Featured";
import Home from "./Home";
import New from "./New";

function Index() {
  return (
    <>
      <Helmet>
        <title>Aquarium Keep | Home</title>
      </Helmet>

      <Home />

      <Brand />

      <New />

      <Featured />

      <Banner />
    </>
  );
}

export default Index;
