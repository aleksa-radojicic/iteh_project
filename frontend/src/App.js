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
//number of products shown on a single page
const page_size = 1;

function App() {
  const products = [
    {
      id: 1,
      name: "EHEIM External Filter",
      description: "filter for freshwater and marine aquariums",
      image: "featured1.jpg",
      image2: "featured1.jpg",
      image3: "featured1.jpg",
      image4: "featured1.jpg",
      price: 149.990000000000009094947017729282379150390625,
      created_at: "2022-12-30T10:27:02.000000Z",
      updated_at: "2022-12-30T10:27:02.000000Z",
    },
    {
      id: 2,
      name: "EHEIM Smart climate controller",
      description: "the device which controlls climate parameters",
      image: "featured2.jpg",
      image2: "featured1.jpg",
      image3: "featured1.jpg",
      image4: "featured1.jpg",
      price: 299.990000000000009094947017729282379150390625,
      created_at: "2022-12-30T10:27:02.000000Z",
      updated_at: "2022-12-30T10:27:02.000000Z",
    },
    {
      id: 3,
      name: "EHEIM Autofeeder",
      description: "autofeeder from EHEIM",
      image: "featured3.jpg",
      image2: "featured1.jpg",
      image3: "featured1.jpg",
      image4: "featured1.jpg",
      price: 39.99000000000000198951966012828052043914794921875,
      created_at: "2022-12-30T10:27:02.000000Z",
      updated_at: "2022-12-30T10:27:02.000000Z",
    },
    {
      id: 4,
      name: "Sera Marine Granules Nature",
      description: "marine granules nature from Sera",
      image: "featured4.jpg",
      image2: "featured2.jpg",
      image3: "featured3.jpg",
      image4: "featured4.jpg",
      price: 5.9900000000000002131628207280300557613372802734375,
      created_at: "2022-12-30T10:27:02.000000Z",
      updated_at: "2022-12-30T10:27:02.000000Z",
    },
    {
      id: 5,
      name: "EHEIM Internal Filter",
      description: "filter for freshwater and marine aquariums",
      image: "featured1.jpg",
      image2: "featured2.jpg",
      image3: "featured3.jpg",
      image4: "featured4.jpg",
      price: 149.990000000000009094947017729282379150390625,
      created_at: "2022-12-30T10:27:02.000000Z",
      updated_at: "2022-12-30T10:27:02.000000Z",
    },
    {
      id: 6,
      name: "EHEIM External Filter",
      description: "filter for freshwater and marine aquariums",
      image: "featured1.jpg",
      image2: "featured1.jpg",
      image3: "featured1.jpg",
      image4: "featured1.jpg",
      price: 149.990000000000009094947017729282379150390625,
      created_at: "2022-12-30T10:27:02.000000Z",
      updated_at: "2022-12-30T10:27:02.000000Z",
    },
    {
      id: 7,
      name: "EHEIM External Filter",
      description: "filter for freshwater and marine aquariums",
      image: "featured1.jpg",
      image2: "featured1.jpg",
      image3: "featured1.jpg",
      image4: "featured1.jpg",
      price: 149.990000000000009094947017729282379150390625,
      created_at: "2022-12-30T10:27:02.000000Z",
      updated_at: "2022-12-30T10:27:02.000000Z",
    },
    {
      id: 8,
      name: "EHEIM External Filter",
      description: "filter for freshwater and marine aquariums",
      image: "featured1.jpg",
      image2: "featured1.jpg",
      image3: "featured1.jpg",
      image4: "featured1.jpg",
      price: 149.990000000000009094947017729282379150390625,
      created_at: "2022-12-30T10:27:02.000000Z",
      updated_at: "2022-12-30T10:27:02.000000Z",
    },
    {
      id: 9,
      name: "EHEIM External Filter",
      description: "filter for freshwater and marine aquariums",
      image: "featured1.jpg",
      image2: "featured1.jpg",
      image3: "featured1.jpg",
      image4: "featured1.jpg",
      price: 149.990000000000009094947017729282379150390625,
      created_at: "2022-12-30T10:27:02.000000Z",
      updated_at: "2022-12-30T10:27:02.000000Z",
    },
    {
      id: 10,
      name: "EHEIM External Filter",
      description: "filter for freshwater and marine aquariums",
      image: "featured1.jpg",
      image2: "featured1.jpg",
      image3: "featured1.jpg",
      image4: "featured1.jpg",
      price: 149.990000000000009094947017729282379150390625,
      created_at: "2022-12-30T10:27:02.000000Z",
      updated_at: "2022-12-30T10:27:02.000000Z",
    },
  ];

  const [current_page, setCurrentPage] = useState(1);
  const [logged_user, setLoggedUser] = useState("cao");
  //using useMemo hook to improve performance (executing the
  //function only when variable current page changes)
  const products_on_current_page = useMemo(() => {
    const first_page_index = (current_page - 1) * page_size;
    const last_page_index = first_page_index + page_size;

    return products.slice(first_page_index, last_page_index);
  }, [current_page]);

  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Index />} />

        <Route path="/contact" element={<Contact />} />

        <Route
          path="/shop"
          element={
            <Shop
              products={products_on_current_page}
              current_page={current_page}
              total_count={products.length}
              page_size={page_size}
              on_page_change={(page) => setCurrentPage(page)}

            />
          }
        />
        <Route
          path="/single_product/:id"
          element={<SingleProduct products={products} />}
        />
        <Route path="/login" element={<Login logged_user={logged_user}
          on_login={setLoggedUser} />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
