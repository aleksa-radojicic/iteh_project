import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";


const Cart = (props) => {
  let navigate = useNavigate();

  const { cartItems, onAddToCart, onRemoveFromCart } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.quantity * c.product.price, 0);
  const totalPrice = itemsPrice;
  const INITIAL_QUANT_STATE = {
    id: 0,
    quantity: 0,
  };

  const [quant, setQuant] = useState(INITIAL_QUANT_STATE);

  function handleCheck() {
    let a = true;
    const data = {
      id: 0,
      quantity: 0,
    };
    console.log(cartItems);
    cartItems.forEach(function (item, index) {

      if (item.quantity > item.product.quantity) {

        a = false;
        swal("Nema toliko na stanju!");
      }

    });

    if (a) {
      cartItems.forEach(function (item, index) {
        console.log(item.product.id);
        if (index === 0) {
          console.log("Caoo");
          data.id = item.product.id;
          data.quantity = item.product.quantity;
          // setQuant({
          //   id: item.product.id,
          //   quantity: item.product.quantity
          // });
        }
        console.log(data);

        // axios

        //   .get("api/product/" + item.product.id)
        //   .then((res) => {
        //     console.log(res.data.product.quantity);
        //     item.product.quantity = res.data.product.quantity;

        //   });
        if (item.product.id === data.id) {
          console.log("uso sam");
          item.product.quantity = data.quantity;
        }
        console.log(item.product.quantity);
        const obj = {

          'quantity': item.product.quantity - item.quantity
        };


        data.id = item.product.id;
        data.quantity = obj.quantity;


        const options = {
          method: 'PUT',
          data: obj,
          url: 'api/productsQuan/' + item.product.id
        };

        axios(options).then(res => {


          if (res.data.success === true) {



          }
          else {
            swal("Los update ");
          }
        });



      });

      navigate('/checkout');
    } else {
      swal("Pokusajte ponovo !");

    }




  }



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
                {/* <Link className="nav-link" to="/checkout"> */}
                <button onClick={() => handleCheck()}>
                  Checkout
                </button>
                {/* </Link> */}

              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default Cart;
