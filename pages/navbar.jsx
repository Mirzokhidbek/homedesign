import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="main-containers">
        <div className="sidebar-header">
          <span className="logo">🚀</span>
          <span className="title">Admin Panel</span>
        </div>

        {/* Menyular */}
        <Link to={"/dashboard"}>
          <div className="container">
            <span className="icon">🏠</span>Dashboard
          </div>
        </Link>
        <Link to={"/markets"}>
          <div className="container">
            <span className="icon">🛒</span>Markets
          </div>
        </Link>
        <Link to={"/restaurants"}>
          <div className="container">
            <span className="icon">🍽️</span>Restaurants
          </div>
        </Link>
        <Link to={"/Products"}>
          <div className="container">
            <span className="icon">🛍️</span>Products
          </div>
        </Link>
        <Link to={"/Users"}>
          <div className="container">
            <span className="icon">👥</span>Users
          </div>
        </Link>
        <Link to={"/Orders"}>
          <div className="container">
            <span className="icon">📋</span>Orders
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
