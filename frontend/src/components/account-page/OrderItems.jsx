import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../contact-page/Spinner";


const OrderItems = () => {
  let { id } = useParams();
  const [orderItems, setOrderItems] = useState(null);

  useEffect(() => {
    axios
      //.get("api/admin/order/" + id+"/order_items")
      .get("api/order_items/" + id)
      .then((res) => {
        console.log(res);
        setOrderItems(res.data.order_items);
      })
      .catch((e) => {
        console.log(e.response.data);
      }, []);
  }, []);

  return (
    <>
      <section className="orders container my-5 py-5">
        <div className="container mt-5">
          <h2 className="font-weight-bold text-center">Order details</h2>
          <hr className="mx-auto" />
        </div>

        <table className="mt-5 pt-5 mx-auto">
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
          <tbody>
          {orderItems == null ? (
            <div className="abv">
              <Spinner />
            </div>
          ) : (
            orderItems.map((item) => {
              return (
                
                  
                
                <tr>
                  <td>
                    <div className="product-info">
                      <img
                        src={require("../../images/" + item.product.image)}
                      />
                      <div>
                        <p className="mt-3">{item.product["name"]}</p>
                      </div>
                    </div>
                  </td>

                  <td>
                    <span> ${item.price}</span>
                  </td>

                  <td>
                    <span>{item.quantity}</span>
                  </td>

                  <td>
                    <span>${item.quantity * item.price}</span>
                  </td>
                </tr>
              );
            })
          )}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default OrderItems;
