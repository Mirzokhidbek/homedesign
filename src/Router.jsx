import React from "react";
import Navbar from "../pages/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "../pages/products";
import Orders from "../pages/orders";
import Users from "../pages/users";
import Dashboard from "../pages/dashboard";
import Markets from "../pages/markets";
import Restaurants from "../pages/restaurants";

const Router = () => {
  return (
    <BrowserRouter>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          margin: "20px",
          gap: "30px",
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/markets" element={<Markets />} />
          <Route path="/restaurants" element={<Products />} />
          <Route path="/Products" element={<Restaurants />} />
          <Route path="/Users" element={<Users />} />
          <Route path="/Orders" element={<Orders />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Router;
