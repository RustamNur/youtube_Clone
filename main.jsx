import React from "react";
import { Container } from "./main.js";
import Cards from "../card/card.jsx";
import { dataBase } from "../../mock.js";

const Main = () => {
  return (
    <Container>
      <Container.Wrapper>
        {dataBase.map((value) => {
          return (
            <Container.Item key={value.id}>
              <Cards data={value} />
            </Container.Item>
          );
        })}
      </Container.Wrapper>
    </Container>
  );
};

export default Main;
