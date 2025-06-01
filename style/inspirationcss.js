import styled from "styled-components";
export const MainBox = styled.div`
  display: flex;
  width: 1450px;
  height: 670px;
  background-color: #fcf8f3;

  margin: 30px;
  flex-direction: row;
`;
export const LeftBox = styled.div`
  width: 600px;
  height: 670px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-left: 50px;

  flex-direction: column;
  gap: 20px;
`;
export const RightBox = styled.div`
  width: 850px;
  height: 670px;
  display: flex;
  gap: 10px;
`;
export const LeftSpan = styled.span`
  display: flex;
  font-size: ${(props) => (props.$secondary ? "30px" : "20px")};
  font-weight: ${(props) => (props.$secondary ? "1000" : "1000")};
  color: ${(props) => (props.$secondary ? "#3A3A3A" : "#616161")};
`;
export const LeftButton = styled.button`
  display: flex;
  width: 176px;
  height: 48px;
  background-color: #e89f71;
  color: white;
  border: none;
  align-items: center;
  justify-content: center;
`;
export const RightImg = styled.img`
  width: ${(props) => (props.$extrawidth ? "404px" : "372px")};
  height: ${(props) => (props.$extrawidth ? "582px" : "486px")};
  margin-top: ${(props) => (props.$extrawidth ? "50px" : "50px")};
`;
export const BottomBox = styled.div`
  display: flex;
  width: 1285px;
  height: 520px;
  margin-left: 105px;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;
export const TextDiv = styled.div`
  display: flex;
  width: 1285pxx;
  height: 20px;
  justify-content: center;
  align-items: center;
  color: #3a3a3a;
  font-weight: 1000;
  margin-top: 39px;
  font-size: 40px;
  margin-left: 100px;
  margin-bottom: 40px;
`;
export const ImgDiv = styled.div`
  display: "flex";
  width: 391px;
  height: 370px;
`;
export const ImgBox = styled.img`
  display: flex;
  width: 391px;
  height: 251px;
  margin-bottom: 10px;
`;
export const ImgBottomSpan = styled.span`
  display: flex;
  color: ${(props) => (props.$extrawidth ? "#3A3A3A" : "#3A3A3A")};
  font-size: ${(props) => (props.$extrawidth ? "22px" : "14")};
  font-weight: ${(props) => (props.$extrawidth ? "1000" : "200")};
  padding: 10px;
`;
export const FurnitureDiov = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 1799px;
  height: 780px;
  border: 1px solid black;
`;
export const FurnitureImg = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 1px;
  object-fit: cover;
`;
export const ContactImgDiv = styled.img`
  display: flex;
  width: 1440px;
  height: 367px;
`;
