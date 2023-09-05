import styled from "styled-components";
import { device } from "../../breakpoint";

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  outline: none;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  background-color: #212121;
  padding: 10px;
  width: 100%;
  z-index: 10;
  @media ${device.laptop} {
    display: flex;
    padding: 5px 1%;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media ${device.tablet} {
    display: flex;
    padding: 5px 1%;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media ${device.mobileL} {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  @media ${device.mobileS} {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  height: 56px;
`;

Container.Left = styled.div`
  display: flex;
  justify-content: center;
  @media ${device.mobileS} {
    position: fixed;
    left: 10px;
    display: flex;
    justify-content: flex-start;
    margin: 0;
  }
`;

Container.Left.Button = styled.button`
  border: none;
  background-color: #212121;
`;

Container.Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
`;

Container.Middle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${device.mobileS} {
    display: flex;
    justify-content: flex-end;
    padding-left: 100px;
  }
`;

Container.Middle.Button = styled.button`
  width: 32px;
  height: 32px;
  background: transparent;
  border: none;
`;

Container.Right = styled.div`
  @media ${device.mobileL} {
    display: none;
  }
  @media ${device.mobileS} {
    display: none;
  }
`;

Container.Input = styled.input`
  padding: 8px 12px;
  width: 630px;
  @media ${device.tablet} {
    width: 200px;
  }
  @media ${device.mobileL} {
    display: none;
  }
  @media ${device.mobileS} {
    display: none;
  }
  border: none;
  background: black;
  margin: 0 12px;
  color: white;
  outline: none;
`;

const Img = styled.img`
  margin-right: 24px;
  margin-left: 24px;
`;
Img.Logo = styled.img`
  width: 21px;
`;
Img.Right = styled.img`
  margin-right: 24px;
`;

export { Container, Img };
