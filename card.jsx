import React from "react";
import { Card } from "./card.js";

const Cards = (props) => {
  return (
    <Card>
      <div>
        <Card.Video src={props.data.video} alt="video" />
      </div>
      <Card.Detail>
        <img src={props.data.owner} alt="img" />
        <h3>{props.data.title}</h3>
      </Card.Detail>
          <h4 style={{ marginTop: "5px" }}>{props.data.channel}</h4>
          <Card.Control>
              <p>{props.data.views}</p>
              
              <p><img src={props.data.dot} alt="" />{props.data.time}</p>
          </Card.Control>
    </Card>
  );
};

export default Cards;
