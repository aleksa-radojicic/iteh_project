import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import RelatedProducts from "./RelatedProducts";
import useScript from "../../hooks/useScript";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../layouts/Spinner";

const SingleProduct = ({ token, onAddToCart }) => {
  let navigate = useNavigate();
  const INITIAL_FORM_STATE = {
    length: 0,
    wid: 0,
  };

  const [form, setForm] = useState(INITIAL_FORM_STATE);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  //get id from url
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("api/shop/product/" + id)
      .then((res) => {
        console.log(res.data
        );
        setProduct(res.data.product);
      })
      .catch((e) => {
        console.log(e.response.data);
      }, []);
  }, [id]);

  const [product, setProduct] = useState(null);

  //we are appending style element with image swap script
  useScript("../imagescript.js");

  function addToCartTrigger() {
    console.log("okinut");
    if (product.price < 50) {
      product.price = 50;
    }
    if (product.price > 50 & product.price < 100) {
      product.price = 100;
    }
    if (token != null) {
      onAddToCart(product);
      navigate("/cart");
    } else {
      navigate("/login/?please_log_in_first");
    }
  }

  return (
    <>
      <Helmet>
        <title>Aquarium Keep | Product</title>
      </Helmet>

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

              </div>
            </div>

            <div className="col-lg-6 col-md-12 col-sm-12">
              <h3 className="py-4">{product.name}</h3>

              <hr></hr>
              <p>
                {(() => {
                  if (product.product_category.name === "Klirit 2mm" & form.length !== 0 & form.wid !== 0) {
                    product.price = (1200 / 3400) * (form.length * form.wid);
                    console.log(product.price);
                    product.price = Math.round(product.price / 50) * 50;;
                    return product.price;
                  }
                  else if (product.name.includes("Ogledalo") & form.length !== 0 & form.wid !== 0) {
                    product.price = (2300 / 3400) * (form.length * form.wid);
                    console.log(product.price);
                    product.price = Math.round(product.price / 50) * 50;;
                    return product.price;
                  }
                  else if (product.name.includes("Klirit Mat Beli 3mm") & form.length !== 0 & form.wid !== 0) {
                    product.price = (1700 / 3400) * (form.length * form.wid);
                    product.price = Math.round(product.price / 50) * 50;;
                    return product.price;
                  }
                  else if (product.name.includes("Solid") & product.product_category.name === "Klirit 3mm" & form.length !== 0 & form.wid !== 0) {
                    product.price = (1400 / 3400) * (form.length * form.wid);
                    product.price = Math.round(product.price / 50) * 50;;
                    return product.price;
                  }
                  else if (product.product_category.name === "Klirit 3mm" & product.name.includes("Klirit Providni") & form.length !== 0 & form.wid !== 0) {
                    product.price = (1500 / 3400) * (form.length * form.wid);
                    product.price = Math.round(product.price / 50) * 50;;
                    return product.price;
                  }
                  else if (product.product_category.name === "Klirit 3mm" & form.length !== 0 & form.wid !== 0) {
                    product.price = (1300 / 3400) * (form.length * form.wid);
                    product.price = Math.round(product.price / 50) * 50;;
                    return product.price;
                  } else if (product.product_category.name === "Lesonit" & form.length !== 0 & form.wid !== 0) {
                    product.price = (350 / 3500) * (form.length * form.wid);
                    console.log(product.price);
                    product.price = Math.round(product.price / 50) * 50;;
                    return product.price;
                  }



                })()}
              </p>





              <h2>{product.price + " din"}

              </h2>
              <hr></hr>

              <button className="buy-btn" onClick={addToCartTrigger}>
                Add To Cart
              </button>
              <h3>Product category</h3>
              <p>{product.product_category.name}</p>

              <h4>Stanje: {product.quantity}</h4>
              <div className="peace" >

                <form id="bill-form" >
                  <div className="form-group ">

                    <label>Duzina</label>
                    <input
                      type="number"
                      className="form-control"
                      onInput={handleChange}
                      id="login-email"
                      name="length"

                      placeholder="duzina"
                      value={form.length}
                    />
                  </div>
                  <div className="form-group">
                    <label>Sirina</label>
                    <input
                      type="number"
                      className="form-control"
                      onInput={handleChange}
                      id="login-password"
                      name="wid"
                      placeholder="sirina"
                      required
                      value={form.wid}
                    />
                  </div>


                </form>

              </div>
              <span>{product.description}</span>
            </div>

          </div>

          {/* <div className="peace" >

            <form id="bill-form" >
              <div className="form-group ">

                <label>Duzina</label>
                <input
                  type="number"
                  className="form-control"
                  onInput={handleChange}
                  id="login-email"
                  name="length"

                  placeholder="duzina"
                  value={form.length}
                />
              </div>
              <div className="form-group">
                <label>Sirina</label>
                <input
                  type="number"
                  className="form-control"
                  onInput={handleChange}
                  id="login-password"
                  name="wid"
                  placeholder="sirina"
                  required
                  value={form.wid}
                />
              </div>


            </form>

          </div> */}

          {/* <RelatedProducts /> */}
        </section>
      )}
    </>
  );
};

export default SingleProduct;
