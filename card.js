import { styled } from "styled-components";

const Card = styled.div`
  width: 370px;
  height: 320px;
  border: 1px solid rgb(129, 127, 127);
  border-radius: 5px;
  border: none;
  box-shadow: 15px 15px 15px 15px rgb(0, 0, 0, 0.2);
  align-items: center;
  justify-content: center;
  /* padding: 5px; */
`;

Card.Video = styled.img`
  width: 370px;
  height: 200px;
  background-size: cover;
`;
Card.Detail = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
`;

Card.Control = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
gap: 5px;

`

export { Card };
