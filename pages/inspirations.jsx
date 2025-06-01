import React from "react";

import {
  BottomBox,
  ImgDiv,
  ImgBottomSpan,
  ImgBox,
  TextDiv,
  FurnitureDiov,
  FurnitureImg,
} from "../style/inspirationcss";

import Rectangle32 from "../images/Rectangle32.png";
import Rectangle33 from "../images/Rectangle33.png";
import Rectangle34 from "../images/Rectangle34.png";
import Rectangle36 from "../images/Rectangle36.png";
import Rectangle37 from "../images/Rectangle37.png";
import Rectangle38 from "../images/Rectangle38.png";
import Rectangle39 from "../images/Rectangle39.png";
import Rectangle40 from "../images/Rectangle40.png";
import Rectangle41 from "../images/Rectangle41.png";

const Inspirations = () => {
  return (
    <div>
      <TextDiv>Tips & Tricks</TextDiv>
      <BottomBox>
        <ImgDiv>
          <ImgBox src={Rectangle32} alt="rectangleImg" />
          <ImgBottomSpan $extrawidth>
            How to create a living room to love
          </ImgBottomSpan>
          <ImgBottomSpan>20 jan 2020</ImgBottomSpan>
        </ImgDiv>
        <ImgDiv>
          <ImgBox src={Rectangle33} alt="rectangleImg" />
          <ImgBottomSpan $extrawidth>
            Solution for clean look working space
          </ImgBottomSpan>
          <ImgBottomSpan>20 jan 2020</ImgBottomSpan>
        </ImgDiv>
        <ImgDiv>
          <ImgBox src={Rectangle34} alt="rectangleImg" />
          <ImgBottomSpan $extrawidth>
            Make your cooking activity more fun
          </ImgBottomSpan>
          <ImgBottomSpan>20 jan 2020</ImgBottomSpan>
        </ImgDiv>
      </BottomBox>
      <TextDiv>#FuniroFurniture</TextDiv>
      <FurnitureDiov>
        <FurnitureImg src={Rectangle36} alt="FurnitureImg" />
        <FurnitureImg src={Rectangle37} alt="FurnitureImg" />
        <FurnitureImg src={Rectangle38} alt="FurnitureImg" />
        <FurnitureImg src={Rectangle39} alt="FurnitureImg" />
        <FurnitureImg src={Rectangle40} alt="FurnitureImg" />
        <FurnitureImg src={Rectangle41} alt="FurnitureImg" />
      </FurnitureDiov>
    </div>
  );
};

export default Inspirations;
