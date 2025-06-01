import React from "react";
import { Link } from "react-router-dom";
import { Maindiv, Rightdiv, RightLogoIcons } from "../style/navbarcss";
import { Logodiv } from "../style/navbarcss";
import { Input } from "../style/navbarcss";
import { SearchIcon } from "../style/navbarcss";
import likelogo from "../images/Vector.png";
import cartlogo from "../images/Cart.png";
import profilelogo from "../images/profile.png";
const Navbar = () => {
  return (
    <div className="main-container">
      <Maindiv>
        <Logodiv>Funiro</Logodiv>
        <Link to={"/home"}>
          <div className="container">Home</div>
        </Link>
        <Link to={"/products"}>
          <div className="container">Products</div>
        </Link>
        <Link to={"/rooms"}>
          <div className="container">Rooms</div>
        </Link>
        <Link to={"/inspirations"}>
          <div className="container">Inspirations</div>
        </Link>
        <Link to={"/contact"}>
          <div className="container">Contact</div>
        </Link>
        <div className="left-container">
          <SearchIcon />
        </div>
        <Input type="text" placeholder="search for minimalist chair"></Input>
        <Rightdiv>
          <RightLogoIcons src={likelogo} alt="Profile" />
          <RightLogoIcons src={cartlogo} alt="Profile" />
          <RightLogoIcons src={profilelogo} alt="Profile" />
        </Rightdiv>
      </Maindiv>
    </div>
  );
};

export default Navbar;
