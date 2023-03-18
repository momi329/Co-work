import Carousel from "./Carousel";
import Products from "./Products";
import styled from "styled-components/macro";
import couponSale from "./couponSale.png";

function Home() {
  return (
    <>
      <Carousel />
      <Products />
      <CouponImg>
        <Close>X</Close>
        <Discount>20</Discount>
        <img
          src={couponSale}
          alt='coupon'
          style={{ width: "100%", height: "100%" }}
        />
      </CouponImg>
    </>
  );
}

export default Home;

const CouponImg = styled.div`
  position: relative;
  position: fixed;
  bottom: 30px;
  left: 30px;
  z-index: 20;
  width: 200px;
  height: 200px;
  border: 1px solid red;
  @media screen and (max-width: 1279px) {
    bottom: 70px;
    left: 15px;
    width: 150px;
    height: 150px;
  }
`;
const Close = styled.div`
  position: absolute;
  right: -9px;
  top: -9px;
  font-family: "Secular One";
  font-style: normal;
  font-weight: 800;
  width: 36px;
  height: 36px;
  font-size: 24px;
  line-height: 36px;
  color: #ffffff;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 21px;
  text-align: center;
  @media screen and (max-width: 1279px) {
    width: 24px;
    height: 24px;
    right: -6px;
    top: -6px;
    font-size: 20px;
    line-height: 24px;
  }
`;
const Discount = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 96px;
  line-height: 24px;
  color: #ffffff;
  position: absolute;
  top: 30px;
  left: 4px;
`;
