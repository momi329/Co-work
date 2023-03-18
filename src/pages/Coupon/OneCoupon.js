import styled from "styled-components/macro";
import { FaClock } from "react-icons/fa";

function OneCoupon() {
  return (
    <OneCouponWrap>
      <Border>
        <Dots></Dots>
        <ColoredDiv>
          <Title>限時優惠</Title>
        </ColoredDiv>
        <Content>
          <Description>指定單品限時八折</Description>
          <ExpireTime>
            <Clock />
            <Time>2小時後生效</Time>
          </ExpireTime>
        </Content>
        <Bottom>領取</Bottom>
      </Border>
    </OneCouponWrap>
  );
}

export default OneCoupon;

const OneCouponWrap = styled.div`
  width: 100%;
  height: 156px;
  @media screen and (max-width: 1279px) {
    width: 100%;
    min-width: 350px;
    height: 90px;
  }
`;
const Border = styled.div`
  border: 1px solid #979797;
  height: 100%;
  weight: 100%;
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;
  @media screen and (max-width: 1279px) {
  }
`;
const Dots = styled.div`
  border-left: 10px dotted #ffffff;
  height: 162px;
  z-index: 3;
  position: absolute;
  left: -5px;
  @media screen and (max-width: 1279px) {
    border-left: 8px dotted #ffffff;
    height: 98px;
  }
`;
const ColoredDiv = styled.div`
  width: 32%;
  height: 100%;
  background-color: #e3842d;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1279px) {
    width: 25%;
  }
`;
const Title = styled.p`
  font-weight: 700;
  font-size: 36px;
  line-height: 50px;
  letter-spacing: 6px;
  color: #ffffff;
  width: 53%;
  min-width: 80px;
  text-align: center;
  @media screen and (max-width: 1279px) {
    font-size: 20px;
    width: 40%;
    min-width: 60px;
    line-height: 30px;
  }
`;
const Content = styled.div`
  position: absolute;
  left: 34%;
  @media screen and (max-width: 1279px) {
    left: 28%;
  }
`;
const Description = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 19px;
  letter-spacing: 6px;
  color: #8b572a;
  @media screen and (max-width: 1279px) {
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 1px;
  }
`;
const ExpireTime = styled.div`
  display: flex;
  margin-top: 8px;
  align-items: center;
  margin-top: 10px;
  @media screen and (max-width: 1279px) {
    margin-top: 4px;
  }
`;
const Time = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 3px;
  color: #ff5018;
  @media screen and (max-width: 1279px) {
    font-size: 12px;
    line-height: 19px;
    letter-spacing: 1px;
  }
`;
const Clock = styled(FaClock)`
  width: 16px;
  height: 16px;
  color: #ff5018;
  margin-right: 5px;
  @media screen and (max-width: 1279px) {
    width: 14px;
    height: 14px;
  }
`;
const Bottom = styled.div`
  width: 16%;
  height: 50px;
  background-color: #000000;
  right: 5%;
  position: absolute;
  color: #ffffff;
  font-weight: 400;
  font-size: 20px;
  line-height: 50px;
  text-align: center;
  letter-spacing: 4px;
  @media screen and (max-width: 1279px) {
    font-size: 12px;
    line-height: 28px;
    text-align: center;
    letter-spacing: 3px;
    height: 28px;
  }
`;
