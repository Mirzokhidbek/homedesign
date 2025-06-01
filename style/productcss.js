import styled from "styled-components";
export const TopMenu = styled.div`
  display: flex;
  width: 1237px;
  height: 85px;
  margin-left: 100px;
  margin-top: 50px;
  gap: 10px;
  flex-direction: row;
`;
export const TopContainer = styled.div`
  display: flex;
  align-items: center;
  width: 280px;
  height: 85px;
  flex-direction: row;
  justify-content: center;
`;
export const TopLogo = styled.img`
  width: 50px;
  height: 50px;
  margin: 22px;
`;
export const MainContainer = styled.div`
  width: 1236px;
  height: 1084px;
  display: flex;
  justify-content: center;
  margin-left: 100px;

  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const MainTop = styled.div`
  display: flex;
  width: 1236px;
  height: 446px;
  margin-top: 20px;
  gap: 25px;
  justify-content: center;
`;
export const ImgText = styled.div`
  width: 285px;
  height: 446px;
  display: flex;
  flex-direction: column;
`;
export const ImgContainer = styled.img`
  width: 285px;
  height: 301px;
`;
export const ImgBottom = styled.div`
  display: flex;
  width: 285px;
  height: 145px;
  background-color: #f4f5f7;
  flex-direction: column;
  gap: 10px;
`;
export const ImgSpan = styled.span`
  display: flex;
  font-size: 25px;
  font-weight: 700;
  color: ${(props) => (props.$secondary ? "#898989" : "black")};
  margin-left: 10px;
  margin-top: 5px;
`;
