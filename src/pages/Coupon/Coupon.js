import styled from "styled-components/macro";
import HotProduct from "./HotProduct";
import OneCoupon from "./OneCoupon";
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose";
const CouponWrapper = styled.div`
  margin: 0 auto;
  width: 1160px;
  margin-top: 54px;
  margin-bottom: 25px;
  @media screen and (max-width: 1279px) {
    width: 100%;
    padding: 10px 20px 10px 20px;
    margin: 25px 0;
  }
`;

const Welcome = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 4px;
  margin-bottom: 25px;
  @media screen and (max-width: 1279px) {
    font-size: 16px;
    line-height: 19px;
    color: #3f3a3a;
    margin-bottom: 10px;
  }
`;

function Coupon() {
  return (
    <CouponWrapper>
      <Welcome>你好，ＯＯ會員! 歡迎領取專屬優惠</Welcome>
      <BorderWrapper>
        <OneCoupon />
        <HotWrap>
          <HotProduct />
          <HotProduct />
          <HotProduct />
          <AiOutlineClose />
        </HotWrap>
        <OneCoupon />
        <OneCoupon />
      </BorderWrapper>
    </CouponWrapper>
  );
}
export default Coupon;
const BorderWrapper = styled.div`
  border: 1px solid #979797;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 50px 40px;
  align-items: center;
  margin-bottom: 150px;
  @media screen and (max-width: 1279px) {
    border-top: 1px solid #979797;
    border-left: 0px;
    border-right: 0px;
    border-bottom: 0px;
    padding: 12px 0;
    gap: 15px;
  }
`;
const HotWrap = styled.div`
  display: flex;
  width: 1096px;
  justify-content: space-around;
  @media screen and (max-width: 1279px) {
    display: none;
  }
`;
