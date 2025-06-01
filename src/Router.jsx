import React from "react";
import Navbar from "../pages/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Products from "../pages/products";
import Contact from "../pages/contact";
import Rooms from "../pages/rooms";
import Inspirations from "../pages/inspirations";
import Home from "../pages/home";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/rooms" element={<Rooms />}></Route>
        <Route path="/inspirations" element={<Inspirations />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
