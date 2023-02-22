import React from "react";
import { Link } from "react-router-dom";

const Cart = (props) => {
  const { cartItems, onAddToCart, onRemoveFromCart } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.quantity * c.product.price, 0);
  const totalPrice = itemsPrice;

  console.log(cartItems);

  return (
    <div className="card col-12">
      <div className="block col-6 align-self-center">
        <h2>Cart Items</h2>
        <div className="cart-div">
          {cartItems.length === 0 && <div>Cart is empty</div>}
          {cartItems.map((item) => (
            <div key={item.id} className="row">
              <div className="col-4">{item.product.name}</div>
              <div className="col-4 ">


                <button
                  onClick={() => onRemoveFromCart(item.product)}
                  className="button-remove "
                >
                  -
                </button>

                <button
                  onClick={() => onAddToCart(item.product)}
                  className="button-add"
                >
                  +
                </button>

              </div>

              <div className="col-4 ">
                {item.quantity} x ${item.product.price.toFixed(2)}
              </div>
            </div>
          ))}

          {cartItems.length !== 0 && (
            <>
              <hr />

              <div className="row">
                <div className="col-6">
                  <strong>Total Price</strong>
                </div>
                <div className="col-6.ml-10 ">
                  <strong>${totalPrice.toFixed(2)}</strong>
                </div>
              </div>
              <hr />
              <div className="row">
                <Link className="nav-link" to="/checkout">
                  <button>
                    Checkout
                  </button>
                </Link>

              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default Cart;
