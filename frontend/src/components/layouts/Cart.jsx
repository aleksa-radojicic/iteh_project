import React from "react";
import { Link } from "react-router-dom";

const Cart = (props) => {
  const { cartItems, onAddToCart, onRemoveFromCart } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.quantity * c.product.price, 0);
  const totalPrice = itemsPrice;

  console.log(cartItems);

  return (
    <div class="card col-12">
      <div className="block col-6">
        <h2>Cart Items</h2>
        <div className="cart-div">
          {cartItems.length === 0 && <div>Cart is empty</div>}
          {cartItems.map((item) => (
            <div key={item.id} className="row">
              <div className="col-2">{item.product.name}</div>
              <div className="col-2">
                <button
                  onClick={() => onRemoveFromCart(item.product)}
                  className="button-remove"
                >
                  -
                </button>{" "}
                <button
                  onClick={() => onAddToCart(item.product)}
                  className="button-add"
                >
                  +
                </button>
              </div>

              <div className="col-2 text-right">
                {item.quantity} x ${item.product.price.toFixed(2)}
              </div>
            </div>
          ))}

          {cartItems.length !== 0 && (
            <>
              <hr />

              <div className="row">
                <div className="col-2">
                  <strong>Total Price</strong>
                </div>
                <div className="col-1 text-right">
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
