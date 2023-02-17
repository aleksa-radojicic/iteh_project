import React, { useMemo, useState } from "react";
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
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <BrowserRouter>
      <NavBar token={token} cartItems={cartItems} />

      <Routes>
        <Route path="/" element={<Index />} />

        <Route path="/contact" element={<Contact />} />

        <Route
          path="/shop"
          element={
            <Shop

              current_page={current_page}
              // total_count={products.length}
              total_count={9}
              page_size={page_size}
              onAdd={onAdd}
              on_page_number_change={setCurrentPage}
            />
          }
        />
        <Route
          path="/single_product/:id"
          element={<SingleProduct />}
        />

        <Route path="/login" element={<Login logged_user={logged_user}
          on_login={setLoggedUser} addToken={addToken} />} />
        <Route path="/register" element={<Register />} />

        <Route path="/account" element={<Account user={logged_user} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove} />} />
      </Routes >

      <Footer />
    </BrowserRouter >
  );
}

export default App;
