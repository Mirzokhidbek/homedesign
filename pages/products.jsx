import React from "react";
import {
  ImgText,
  MainContainer,
  MainTop,
  TopContainer,
  TopLogo,
  TopMenu,
  ImgContainer,
  ImgBottom,
  ImgSpan,
} from "../style/productcss";
import trophy from "../images/trophy.png";
import guarantee from "../images/guarantee.png";
import shipping from "../images/shipping.png";
import customer from "../images/customer.png";
import "../style/productcss";
import Images1 from "../images/Images1.png";
import Images2 from "../images/Images2.png";
import Images3 from "../images/Images3.png";
import Images4 from "../images/Images4.png";
import Images5 from "../images/Images5.png";
import Images6 from "../images/Images6.png";

const Products = () => {
  return (
    <div className="main-cont">
      <TopMenu>
        <TopContainer>
          <TopLogo src={trophy} alt="TopLogo"></TopLogo>
          <div className="top-container">
            <span>High Quality</span>
            <p>crafted materials </p>
          </div>
        </TopContainer>
        <TopContainer>
          <TopLogo src={guarantee} alt="TopLogo"></TopLogo>
          <div className="top-container">
            <span>High Quality</span>
            <p>crafted materials </p>
          </div>
        </TopContainer>
        <TopContainer>
          <TopLogo src={shipping} alt="TopLogo"></TopLogo>
          <div className="top-container">
            <span>High Quality</span>
            <p>crafted materials </p>
          </div>
        </TopContainer>
        <TopContainer>
          <TopLogo src={customer} alt="TopLogo"></TopLogo>
          <div className="top-container">
            <span>High Quality</span>
            <p>crafted materials </p>
          </div>
        </TopContainer>
      </TopMenu>
      <MainContainer>
        <div>
          <h1>Our Products</h1>
        </div>
        <MainTop>
          <ImgText>
            <ImgContainer src={Images1} alt="TopLogo"></ImgContainer>
            <ImgBottom>
              <ImgSpan>Syltherine</ImgSpan>
              <ImgSpan $secondary>Syltherine</ImgSpan>
              <ImgSpan>Syltherine</ImgSpan>
            </ImgBottom>
          </ImgText>
          <ImgText>
            <ImgContainer src={Images2} alt="TopLogo"></ImgContainer>
            <ImgBottom>
              <ImgSpan>Syltherine</ImgSpan>
              <ImgSpan $secondary>Syltherine</ImgSpan>
              <ImgSpan>Syltherine</ImgSpan>
            </ImgBottom>
          </ImgText>
          <ImgText>
            <ImgContainer src={Images3} alt="TopLogo"></ImgContainer>
            <ImgBottom>
              <ImgSpan>Syltherine</ImgSpan>
              <ImgSpan $secondary>Syltherine</ImgSpan>
              <ImgSpan>Syltherine</ImgSpan>
            </ImgBottom>
          </ImgText>
          <ImgText>
            <ImgContainer src={Images4} alt="TopLogo"></ImgContainer>
            <ImgBottom>
              <ImgSpan>Syltherine</ImgSpan>
              <ImgSpan $secondary>Syltherine</ImgSpan>
              <ImgSpan>Syltherine</ImgSpan>
            </ImgBottom>
          </ImgText>
        </MainTop>
        <MainTop>
          <ImgText>
            <ImgContainer src={Images5} alt="TopLogo"></ImgContainer>
            <ImgBottom>
              <ImgSpan>Syltherine</ImgSpan>
              <ImgSpan $secondary>Syltherine</ImgSpan>
              <ImgSpan>Syltherine</ImgSpan>
            </ImgBottom>
          </ImgText>
          <ImgText>
            <ImgContainer src={Images1} alt="TopLogo"></ImgContainer>
            <ImgBottom>
              <ImgSpan>Syltherine</ImgSpan>
              <ImgSpan $secondary>Syltherine</ImgSpan>
              <ImgSpan>Syltherine</ImgSpan>
            </ImgBottom>
          </ImgText>
          <ImgText>
            <ImgContainer src={Images6} alt="TopLogo"></ImgContainer>
            <ImgBottom>
              <ImgSpan>Syltherine</ImgSpan>
              <ImgSpan $secondary>Syltherine</ImgSpan>
              <ImgSpan>Syltherine</ImgSpan>
            </ImgBottom>
          </ImgText>
          <ImgText>
            <ImgContainer src={Images2} alt="TopLogo"></ImgContainer>
            <ImgBottom>
              <ImgSpan>Syltherine</ImgSpan>
              <ImgSpan $secondary>Syltherine</ImgSpan>
              <ImgSpan>Syltherine</ImgSpan>
            </ImgBottom>
          </ImgText>
        </MainTop>
      </MainContainer>
    </div>
  );
};

export default Products;
