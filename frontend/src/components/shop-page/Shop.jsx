import React, { useEffect, useMemo, useState } from "react";
import Pagination from "./Pagination";
import Product from "./Product";
import "../../shop.css";
import { Helmet } from "react-helmet";
import axios from "axios";

const Shop = ({
  current_page,
  setCurrentPage,
  total_count,
  page_size,
  onAddToCart,
  on_page_number_change,
  selectedCategory,
  setSelectedCategory,
}) => {
  const [products_on_current_page, setProductsOnCurrentPage] = useState([]);

  const [categorylist, setCategorylist] = useState([]);

  //Id of selected category
  //const [selectedCategory, setSelectedCategory] = useState();

  const handleInput = (e) => {
    console.log(e.target);
    setSelectedCategory(e.target.value);
    setCurrentPage(1);
  };

  useEffect(() => {
    let isMounted = true;

    axios.get(`/api/product_categories`).then((res) => {
      console.log(res.data);
      // if (isMounted) {
      if (res != null) {
        setCategorylist(res.data.product_categories);
      }
      // }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    axios
      .get("api/shop/", {
        params: {
          page: current_page,
          filter: selectedCategory,
        },
      })
      .then((res) => {
        setProductsOnCurrentPage(res.data.products);
      })
      .catch((e) => {
        console.log(e.response.data);
      }, []);
  }, [current_page, selectedCategory]);

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

        <div className="category-box">
          <h4>Select Category</h4>
          <select
            id="category"
            name="product_category_id"
            onChange={handleInput}
          //value={productInput.product_category_id}
          >
            <option value="">Show all products</option>
            {categorylist.map((item) => {
              return (
                <option defaultValue={1} value={item.id} key={item.id}>
                  {item.name}{" "}
                </option>
              );
            })}
          </select>

        </div>

        <div className="row mx-auto container">
          {products_on_current_page.map((product) => (
            <Product
              product={product}
              key={product.id}
              onAddToCart={onAddToCart}
            />
          ))}

          <Pagination
            current_page={current_page}
            total_count={total_count}
            page_size={page_size}
            on_page_number_change={on_page_number_change}
          />
        </div>
      </section>
    </>
  );
};

export default Shop;
