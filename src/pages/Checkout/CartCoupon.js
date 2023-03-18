import styled from "styled-components/macro";
import OneCoupon from "../Coupon/OneCoupon";

function CartCoupon() {
  return (
    <CartCouponWrapper>
      <HalfWrap>
        <OneCoupon />
      </HalfWrap>
      <HalfWrap>
        <OneCoupon />
      </HalfWrap>
      <HalfWrap>
        <OneCoupon />
      </HalfWrap>
    </CartCouponWrapper>
  );
}
export default CartCoupon;
const CartCouponWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 20px 0;
  gap: 20px;
  @media screen and (max-width: 1279px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
const HalfWrap = styled.div`
  width: 49%;
`;
