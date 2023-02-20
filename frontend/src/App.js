import React, { useEffect, useState } from "react";

import "./App.css";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import Index from "./components/index-page/Index";
import Contact from "./components/contact-page/Contact";
import Shop from "./components/shop-page/Shop";
import SingleProduct from "./components/single-product-page/SingleProduct";
import Login from "./components/login-page/Login";
import Register from "./components/register-page/Register";
import Account from "./components/account-page/Account";
import Cart from "./components/layouts/Cart";
import Masterpage from "./components/admin/Masterpage";
import AddProduct from "./components/admin/product/AddProduct";
import AllProducts from "./components/admin/product/AllProducts";
import OrderItems from "./components/account-page/OrderItems";
import Checkout from "./components/checkout-page/Checkout";
import EditProduct from "./components/admin/product/EditProduct";
import axios from "axios";
import AllOrders from "./components/admin/order/AllOrders";
import Footer from "./components/layouts/Footer";
import NavBar from "./components/layouts/NavBar";


//number of products shown on a single page
const page_size = 12;

function App() {
  const [token, setToken] = useState(null);
  const [productId, setProductId] = useState();
  const [current_page, setCurrentPage] = useState(1);

  const [logged_user, setLoggedUser] = useState();

  const [total_product_count, setTotalProductCount] = useState(0);

  //Id of selected category for shop page
  const [selectedCategory, setSelectedCategory] = useState();

  function addToken(auth_token) {
    setToken(auth_token);
  }
  function addProductId(id) {
    setProductId(id);
  }
  const [cartItems, setCartItems] = useState([]);

  const onAddToCart = (product) => {
    const exist = cartItems.find((x) => x.product.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.product.id === product.id
            ? {
              ...exist,
              price: product.price * (exist.quantity + 1),
              quantity: exist.quantity + 1,
            }
            : x
        )
      );
    } else {
      setCartItems([
        ...cartItems,
        { product: product, price: product.price, quantity: 1 },
      ]);
    }
  };
  const onRemoveFromCart = (product) => {
    const exist = cartItems.find((x) => x.product.id === product.id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((x) => x.product.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.product.id === product.id
            ? {
              ...exist,
              price: product.price * (exist.quantity - 1),
              quantity: exist.quantity - 1,
            }
            : x
        )
      );
    }
  };

  //get total number of products for shop page pagination

  useEffect(() => {
    axios
      .get(`/api/numofprod`, {
        params: {
          filter: selectedCategory,
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res != null) {
          setTotalProductCount(res.data.number_of_products);
        }
      })
      .catch((e) => {
        console.log(e.response.data);
      }, []);
  }, [selectedCategory]);

  return (
    <BrowserRouter>
      <NavBar
        token={token}
        setToken={setToken}
        cartItems={cartItems}
        setLoggedUser={setLoggedUser}
      />

      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<Index />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/shop"
          element={
            <Shop
              current_page={current_page}
              setCurrentPage={setCurrentPage}
              total_count={total_product_count}
              page_size={page_size}
              onAddToCart={onAddToCart}
              on_page_number_change={setCurrentPage}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          }
        />
        <Route
          path="/single_product/:id"
          element={<SingleProduct token={token} onAddToCart={onAddToCart} />}
        />
        <Route
          path="/login"
          element={
            token != null ? (
              <Navigate to="/account/?you_are_already_logged_in" />
            ) : (
              <Login
                logged_user={logged_user}
                setLoggedUser={setLoggedUser}
                addToken={addToken}
              />
            )
          }
        />
        <Route
          path="/register"
          element={
            token != null ? (
              <Navigate to="/account/?please_log_out_first" />
            ) : (
              <Register />
            )
          }
        />




        {/* Authenticated admin user routes !!! NEEDS TO BE ADDED !!!*/}
        <Route
          path="/admin/dashboard"
          element={
            token != null && logged_user.user_type === "admin" ? (
              <Masterpage />
            ) : (
              <Navigate to="/?you_are_unauthorized_to_enter_this_area" />
            )
          }
        />
        <Route
          path="/admin/addProduct"
          element={
            token != null && logged_user.user_type === "admin" ? (
              <AddProduct />
            ) : (
              <Navigate to="/?you_are_unauthorized_to_enter_this_area" />
            )
          }
        />
        <Route
          path="/admin/allProducts"
          element={
            token != null && logged_user.user_type === "admin" ? (
              <AllProducts addProductId={addProductId} />
            ) : (
              <Navigate to="/?you_are_unauthorized_to_enter_this_area" />
            )
          }
        />
        <Route
          path="/admin/allProducts/editProduct/:id"
          element={
            token != null && logged_user.user_type === "admin" ? (
              <EditProduct id={productId} />
            ) : (
              <Navigate to="/?you_are_unauthorized_to_enter_this_area" />
            )
          }
        />

        {/* Authenticated regular user routes */}
        <Route
          path="/account"
          element={
            token != null ? (
              <Account logged_user={logged_user} />
            ) : (
              <Navigate to="/login/?please_log_in_first" />
            )
          }
        />
        <Route
          path="/orderItems/:id"
          element={
            token != null ? (
              <OrderItems />
            ) : (
              <Navigate to="/login/?please_log_in_first" />
            )
          }
        />
        <Route
          path="/cart"
          element={
            token != null ? (
              <Cart
                cartItems={cartItems}
                onAddToCart={onAddToCart}
                onRemoveFromCart={onRemoveFromCart}
              />
            ) : (
              <Navigate to="/login/?please_log_in_first" />
            )
          }
        />

        <Route
          path="/checkout"
          element={
            token != null ? (
              <Checkout
                cartItems={cartItems}
                setCartItems={setCartItems}
                logged_user={logged_user}
                setLoggedUser={setLoggedUser}
              />
            ) : (
              <Navigate to="/login/?please_log_in_first" />
            )
          }
        />
        {/* ----------------------------------------------------- */}
      </Routes>

      <Footer />
      {/* ----------------------------------------------------- */}
    </BrowserRouter>
  );
}

export default App;
