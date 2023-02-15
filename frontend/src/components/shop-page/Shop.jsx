import React from "react";
import Pagination from "./Pagination";
import Product from "./Product";
import "../../shop.css";
import { Helmet } from "react-helmet";

const Shop = ({
  products,
  current_page,
  total_count,
  page_size,
  on_page_change,
}) => {
  return (
    <>
      <Helmet>
        <title>Aquarium Keep | Shop</title>
      </Helmet>

      <section id="featured" className="my-5 py-5">
        <div className="container mt-5 py-5">
          <h3>Our Products</h3>
          <hr />
          <p>Here you can check our products</p>
        </div>

        <div className="row mx-auto container">
          {products.map((product) => (
            <Product product={product} key={product.id} />
          ))}

          <Pagination
            current_page={current_page}
            total_count={total_count}
            page_size={page_size}
            on_page_change={on_page_change}
          />
        </div>
      </section>
    </>
  );
};

export default Shop;
