import React from "react";
import { useParams } from "react-router-dom";
import RelatedProducts from "./RelatedProducts";
import useScript from "../../hooks/useScript";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import axios from "axios";

import Spinner from "../layouts/Spinner";

const SingleProduct = () => {
  //get id from url
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("api/shop/product/" + id)
      .then((res) => {
        setProduct(res.data.product);
      })
      .catch((e) => {
        console.log(e.response.data);
      }, []);
  }, []);

  const [product, setProduct] = useState(null);

  //we are appending style element with image swap script
  useScript("../imagescript.js");

  return (
    <>
      <Helmet>
        <title>Aquarium Keep | Product</title>
      </Helmet>
      <h1>sadf</h1>

      {product == null ? (
        <div className="abv">
          <Spinner />
        </div>
      ) : (
        <section className="container single-product">
          <div className="row">
            <div className="col-lg-5 col-md-6 col-sm-12">
              <img
                className="img-fluid w-100 pb-1 mt-4"
                id="mainImg"
                src={require("../../images/" + product.image)}
                alt="img"
              />
              <div className="small-img-group">
                <div className="small-img-col">
                  <img
                    src={require("../../images/" + product.image)}
                    width="100%"
                    className="small-img"
                    alt="img1"
                  />
                </div>
                <div className="small-img-col">
                  <img
                    src={require("../../images/" + product.image2)}
                    width="100%"
                    className="small-img"
                    alt="img2"
                  />
                </div>
                <div className="small-img-col">
                  <img
                    src={require("../../images/" + product.image3)}
                    width="100%"
                    className="small-img"
                    alt="img3"
                  />
                </div>
                <div className="small-img-col">
                  <img
                    src={require("../../images/" + product.image4)}
                    width="100%"
                    className="small-img"
                    alt="img4"
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 col-sm-12">
              <h3 className="py-4">{product.name}</h3>
              <h2>{"$" + product.price}</h2>

              <form method="POST" action="cart.php">
                <input type="hidden" name="product_id" value={product.id} />
                <input
                  type="hidden"
                  name="product_image"
                  value={product.image}
                />
                <input type="hidden" name="product_name" value={product.name} />
                <input
                  type="hidden"
                  name="product_price"
                  value={product.price}
                />
                <input type="number" name="product_quantity" value="1" />
                <button className="buy-btn" type="submit" name="add_to_cart">
                  Add to Cart
                </button>
              </form>

              <h4 className="mt-5 mb-5">Product details</h4>
              <span>{product.description}</span>
            </div>
          </div>

          <RelatedProducts />
        </section>
      )}
    </>
  );
};

export default SingleProduct;
