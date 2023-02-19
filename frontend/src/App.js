import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./components/index-page/Index";
import NavBar from "./components/layouts/NavBar";
import Footer from "./components/layouts/Footer";
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

//number of products shown on a single page
const page_size = 3;

function App() {
  const [token, setToken] = useState(null);

  const [current_page, setCurrentPage] = useState(1);

  //using useMemo hook to improve performance (executing the
  //function only when variable current page changes)
  // const products_on_current_page = useMemo(() => {
  //   const first_page_index = (current_page - 1) * page_size;
  //   const last_page_index = first_page_index + page_size;

  //   return products.slice(first_page_index, last_page_index);
  // }, [current_page]);

  const [logged_user, setLoggedUser] = useState();

  function addToken(auth_token) {
    setToken(auth_token);
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

  return (
    <BrowserRouter>
      <NavBar
        token={token}
        setToken={setToken}
        cartItems={cartItems}
        setLoggedUser={setLoggedUser}
      />

      <Routes>
        <Route path="/" element={<Index />} />

        <Route path="admin/dashboard" element={<Masterpage />}></Route>
        <Route path="admin/addProduct" element={<AddProduct />}></Route>
        <Route path="admin/allProducts" element={<AllProducts />}></Route>
        <Route path="/contact" element={<Contact />} />

        <Route
          path="/shop"
          element={
            <Shop
              current_page={current_page}
              // total_count={products.length}
              total_count={9}
              page_size={page_size}
              onAddToCart={onAddToCart}
              on_page_number_change={setCurrentPage}
            />
          }
        />
        <Route
          path="/single_product/:id"
          element={<SingleProduct onAddToCart={onAddToCart} />}
        />

        <Route
          path="/orderItems/:id"
          element={<OrderItems />}
        />

        <Route
          path="/login"
          element={
            <Login
              logged_user={logged_user}
              setLoggedUser={setLoggedUser}
              addToken={addToken}
            />
          }
        />
        <Route path="/register" element={<Register />} />

        <Route
          path="/account"
          element={<Account logged_user={logged_user} />}
        />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              onAddToCart={onAddToCart}
              onRemoveFromCart={onRemoveFromCart}
            />
          }
        />
        <Route
          path="/checkout"
          element={
            <Checkout
              cartItems={cartItems}
              setCartItems={setCartItems}
              logged_user={logged_user}
              setLoggedUser={setLoggedUser}
            />
          }
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
