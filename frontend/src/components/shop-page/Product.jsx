import React from 'react';
import { Link } from 'react-router-dom';


const Product = ({ product }) => {
  return (
    <div className="product text-center col-lg-3 col-md-4 col-sm-12">
      <img className="img-fluid mb-3" src={require("../../images/" + product.image)} />

      <div className="star">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
      </div>

      <h5 className="p-name">{product.name}</h5>


      <h4 className="p-price">{"$" + product.price}</h4>

      <Link to={`/single_product/${product.id}`} className="btn buy-btn">Buy Now</Link>
    </div>
  );
};

export default Product;