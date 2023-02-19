import React, { useEffect, useMemo, useState } from "react";
import Pagination from "./Pagination";
import Product from "./Product";
import "../../shop.css";
import { Helmet } from "react-helmet";
import axios from "axios";

const Shop = ({
  current_page,
  total_count,
  page_size,

  onAdd,

  on_page_number_change,
}) => {
  const [products_on_current_page, setProductsOnCurrentPage] = useState([]);

  const[category, setCategory] = useState("");

  const onOptionChange= (e)=>{
      setCategory(e.target.value)
  }

  //useEffect za filter proizvoda
  // useEffect(()=>{
  //   if(category===category){
  //       console.log(category)
  //       axios.get(`api/shop/${category}`).
  //       then(res=>{
  //           console.log(res);
  //           setProductsOnCurrentPage(res.data)
  //       }).catch(err=>{
  //           console.log(err);
  //       })
  //   }    
  // },[category])

  useEffect(() => {
    axios
      .get("api/shop/" + current_page)
      .then((res) => {
        setProductsOnCurrentPage(res.data.products);
      })
      .catch((e) => {
        console.log(e.response.data);
      }, []);

  }, [current_page]);

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

        <div className='category-box'>
          <select id="category" onChange={(e)=>onOptionChange(e)}>
            <option value="">Filter by Category</option>
            <option value="Aquariums">Aquariums</option>
            <option value="Corals">Corals</option>
            <option value="Food">Food</option>
            <option value="Grow">Grow</option>
          </select>
          <p>Selected category: {category}</p>
        </div>
        
        <div className="row mx-auto container">
          {products_on_current_page.map((product) => (
            <Product product={product} key={product.id} onAdd={onAdd} />
          ))
          }

          <Pagination
            current_page={current_page}
            total_count={total_count}
            page_size={page_size}
            on_page_number_change={on_page_number_change}
          />
        </div >
      </section >
    </>
  );
};

export default Shop;
