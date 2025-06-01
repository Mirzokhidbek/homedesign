import styled from "styled-components";
import { FiSearch } from "react-icons/fi";

export const Maindiv = styled.div`
  display: flex;
  width: 1240px;
  height: 45px;
  margin-top: 45px;
  margin-left: 100px;
  color: black;
  text-decoration: none;
  gap: 30px;
  align-items: center;
  background-color: #fef8f0;
`;

export const Logodiv = styled.div`
  font-weight: 700;
  size: 30px;
  margin-right: 80px;
  padding: 20px;
  text-decoration: none;
`;
export const Input = styled.input`
  width: 473px;
  height: 35px;
  border: none;
`;
export const SearchIcon = styled(FiSearch)`
  background-color: white;
  margin-top: 10px;
`;
export const Rightdiv = styled.div`
  width: 152px;
  height: 40px;
  gap: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const RightLogoIcons = styled.img`
  width: 24px;
  height: 23px;
`;
