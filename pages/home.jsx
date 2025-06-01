import React from "react";
import sofa from "../images/sofaimg.png";
import {
  HeroSection,
  HeroTextBox,
  HeroTitle,
  HeroDesc,
  HeroButton,
  HeroImageBox,
  SofaImg,
  ProductCard,
  ProductName,
  ProductDesc,
  ProductPrice,
} from "../style/homecss";
const Home = () => {
  return (
    <div>
      <HeroSection>
        <HeroTextBox>
          <HeroTitle>High-Quality Furniture Just For You</HeroTitle>
          <HeroDesc>
            Our furniture is made from selected and best quality materials that
            are suitable for your dream home
          </HeroDesc>
          <HeroButton>Shop Now</HeroButton>
        </HeroTextBox>
        <HeroImageBox>
          <SofaImg src={sofa} alt="Sofa" />
          <ProductCard>
            <ProductName>Bohauss</ProductName>
            <ProductDesc>Luxury big sofa 2-seat</ProductDesc>
            <ProductPrice>17.000.000</ProductPrice>
          </ProductCard>
        </HeroImageBox>
      </HeroSection>
    </div>
  );
};

export default Home;
