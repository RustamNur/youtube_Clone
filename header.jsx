import React from "react";
import { Container, Img } from "./header.js";
import menu from "../assets/icons/vector.svg";
import logo from "../assets/icons/yt-logo.svg";
import search from "../assets/icons/search.svg";
import mic from "../assets/icons/mic.svg";
import camera from "../assets/icons/cam.svg";
import topbar from "../assets/icons/topbar.svg";
import notification from "../assets/icons/bell.svg";
import circle from "../assets/icons/Profile-Photo1.svg";


const Header = () => {
  

  return (
    <Container>
      <Container.Left>
        <Container.Left.Button>
          <Img src={menu} alt="vector" />
        </Container.Left.Button>
        <Container.Left.Button>
          <Container.Logo>
            <Img.Logo src={logo} alt="logo" />
            <h3>Youtube</h3>
          </Container.Logo>
        </Container.Left.Button>
      </Container.Left>
      <Container.Middle>
        <Container.Input type="text" placeholder="Search..." />
        <Container.Middle.Button>
          <img src={search} alt="" />
        </Container.Middle.Button>
        <Container.Middle.Button>
          <img src={mic} alt="" />
        </Container.Middle.Button>
      </Container.Middle>
      <Container.Right>
        <Img.Right src={camera} alt="cam" />
        <Img.Right src={topbar} alt="cam" />
        <Img.Right src={notification} alt="cam" />
        <Img.Right src={circle} alt="cam" />
      </Container.Right>
    </Container>
  );
};

export default Header;
