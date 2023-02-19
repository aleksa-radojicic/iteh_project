import React, { useEffect, useState } from "react";
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
import EditProduct from "./components/admin/product/EditProduct";
import axios from "axios";


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
        <Route path="/" element={<Index />} />

        <Route path="admin/dashboard" element={<Masterpage />}></Route>
        <Route path="admin/addProduct" element={<AddProduct />}></Route>
        <Route path="admin/allProducts" element={<AllProducts addProductId={addProductId} />}></Route>
        <Route path="admin/allProducts/editProduct/:id" element={<EditProduct id={productId} />}></Route>
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
          element={<SingleProduct onAddToCart={onAddToCart} />}
        />

        <Route path="/orderItems/:id" element={<OrderItems />} />

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
