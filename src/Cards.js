import React from "react";
// import { Card, Button } from "semantic-ui-react";
import MyCard from "./MyCard";

const Cards = ({cards, remove}) => (
  // we are gonna wanna to render some data right about here
  <div>
      {cards.map( card => (
        <MyCard key={card.id} {...card} remove={remove} />
         )
      )}
  </div>
)

export default Cards;