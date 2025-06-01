import React from "react";
import {
  LeftBox,
  MainBox,
  RightBox,
  LeftSpan,
  LeftButton,
  RightImg,
} from "../style/inspirationcss";
import Rectangle1 from "../images/Rectangle1.png";
import Rectangle2 from "../images/Rectangle.png";
import Rectangle3 from "../images/Rectang.png";

const Rooms = () => {
  return (
    <div>
      <MainBox>
        <LeftBox>
          <LeftSpan $secondary>
            50+ Beautiful rooms <br /> inspiration
          </LeftSpan>
          <LeftSpan>
            Our designer already made a <br />
            lot of beautiful prototipe of rooms that inspire you
          </LeftSpan>
          <LeftButton>Explore More</LeftButton>
        </LeftBox>
        <RightBox>
          <RightImg src={Rectangle1} alt="rightimg" $extrawidth />
          <RightImg src={Rectangle2} alt="rightim" />
          <RightImg src={Rectangle3} alt="righti" />
        </RightBox>
      </MainBox>
    </div>
  );
};

export default Rooms;
