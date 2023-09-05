import styled from 'styled-components';
import {device} from "../../breakpoint"


const Box = styled.div`
 position: fixed;
 top: 50px;
 left: 300px;
 background-color:#212121;
 padding: 8px;
 display: flex;
 justify-content:flex-start;
 align-items:center;
 overflow-x:scroll;
 gap: 12px;
 @media ${device.laptop} {
    width: 100%;
  }
  @media ${device.tablet} {
    width: 80%;
  }
  @media ${device.mobileL} {
    width: 70%;
  }
  @media ${device.mobileM} {
    width: 50%;
  }
  @media ${device.mobileS} {
    width: 20%;
  }
 width: 100%;
 height: 56px;
 z-index: 9;
`
Box.Btn = styled.button`
 padding: 5px 15px;
 border-radius:20px;
 background-color:#424242 ;
 border:none;
 outline:none;
 &:hover {
    background-color:#bdbdbd;
 }
`

export {Box}