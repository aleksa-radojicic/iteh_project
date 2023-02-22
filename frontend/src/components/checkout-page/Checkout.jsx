import axios from "axios";
import React, { useRef } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

const Checkout = ({ cartItems, setCartItems, logged_user, setLoggedUser }) => {
  let navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (a, c) => a + c.quantity * c.product.price,
    0
  );

  const phoneEl = useRef();
  const cityEl = useRef();
  const addressEl = useRef();

  function handlePlaceOrder(e) {
    e.preventDefault();

    const user_phone = phoneEl.current.value;
    const user_city = cityEl.current.value;
    const user_address = addressEl.current.value;

    const order = {
      user_id: logged_user.id,
      user_phone: user_phone,
      user_city: user_city,
      user_address: user_address,
      cost: totalPrice,
      order_items: cartItems,
    };


    console.log(order);

    axios.post("api/orders", order)
      .then((res) => {
        if (res.data.success === true) {
          console.log("Successfully created order.");

          const created_order = res.data.order;

          //update all user's orders
          setLoggedUser({
            ...logged_user,
            orders: [...logged_user.orders, created_order],
          });

          alert("Successfuly created order.");
          navigate("/account");

          //empty cart
          setCartItems([]);
        } else {
          let error_messages = res.data.errors;
          console.log(error_messages);
          const errors_to_display = Object.values(error_messages).join("\n");
          alert(errors_to_display);
          console.log(res.data);
        }
        console.log(res);
      })
      .catch((e) => {
        console.log(e.response.data);
        alert("Couldn't create order. Please try again later.");
        navigate("/");

        //empty cart
        setCartItems([]);
      });
  }

  return (
    <>
      <Helmet>
        <title>Aquarium Keep | Checkout</title>
      </Helmet>

      <section className="my-5 py-5">
        <div className="container text-center mt-3 pt-5">
          <h2 className="form-weight-bold">Checkout</h2>
          <hr className="mx-auto" />
        </div>
        <div className="mx-auto container">
          <form id="checkout-form" onSubmit={handlePlaceOrder}>
            <div className="form-group checkout-small-element">
              <label>Phone</label>
              <input
                type="tel"
                className="form-control"
                id="checkout-phone"
                name="phone"
                placeholder="Phone"
                required
                ref={phoneEl}
              />
            </div>
            <div className="form-group checkout-small-element">
              <label>City</label>
              <input
                type="text"
                className="form-control"
                id="checkout-city"
                name="city"
                placeholder="City"
                required
                ref={cityEl}
              />
            </div>
            <div className="form-group checkout-large-element">
              <label>Address</label>
              <input
                type="text"
                className="form-control"
                id="checkout-address"
                name="address"
                placeholder="Address"
                required
                ref={addressEl}
              />
            </div>
            <div className="form-group checkout-btn-container">
              <p>Total price: ${totalPrice.toFixed(2)}</p>
              <input
                type="submit"
                className="btn"
                id="checkout-btn"
                value="Place Order"
                name="create_order"
              />
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Checkout;
