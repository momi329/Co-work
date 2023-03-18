import styled from "styled-components";

function HotProduct() {
  return (
    <Wrapper>
      <Content>
        <Title>前開衩扭結洋裝</Title>
        <Price> NTD.799</Price>
        <DiscountPrice>NTD.699</DiscountPrice>
      </Content>
      <Product src='./product.png' alt='tests'></Product>
    </Wrapper>
  );
}
export default HotProduct;
const Wrapper = styled.div`
  width: 334px;
  height: 334px;
  background-color: pink;
  position: relative;
  @media screen and (max-width: 1279px) {
    display: none;
  }
`;
const Product = styled.img``;
const Content = styled.div`
  height: 80px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  weidth: 100%;
  color: #ffffff;
  position: absolute;
  bottom: 0;
`;
const Title = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 4px;
  color: #ffffff;
  margin: 10px;
`;
const Price = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  /* or 120% */
  letter-spacing: 1px;
  text-decoration-line: line-through;
  display: inline-block;
  color: #d3d3d3;
  margin-left: 10px;
`;
const DiscountPrice = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  /* or 120% */
  letter-spacing: 1px;
  color: #ffffff;
  display: inline-block;
  margin-left: 4px;
`;
