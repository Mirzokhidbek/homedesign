import styled from "styled-components";

export const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 60px;
  background: #fcf8f5;
  margin-top: 30px;
`;

export const HeroTextBox = styled.div`
  background: #fff;
  padding: 40px 32px;
  border-radius: 12px;
  max-width: 400px;
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.04);
`;

export const HeroTitle = styled.h1`
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 18px;
  color: #222;
`;

export const HeroDesc = styled.p`
  color: #888;
  font-size: 1.1rem;
  margin-bottom: 32px;
`;

export const HeroButton = styled.button`
  background: #e6a57e;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 1.1rem;
  padding: 16px 36px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.2s;
  &:hover {
    background: #d18e62;
  }
`;

export const HeroImageBox = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  min-height: 350px;
`;

export const SofaImg = styled.img`
  width: 90%;
  border-radius: 10px;
  object-fit: cover;
`;

export const ProductCard = styled.div`
  position: absolute;
  bottom: 32px;
  left: 32px;
  background: #fff;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  padding: 20px 28px;
  min-width: 240px;
`;

export const ProductName = styled.div`
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 6px;
`;

export const ProductDesc = styled.div`
  color: #888;
  font-size: 0.98rem;
  margin-bottom: 10px;
`;

export const ProductPrice = styled.div`
  font-weight: 600;
  font-size: 1.08rem;
`;
