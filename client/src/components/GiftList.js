import React from "react";
import GiftCard from "./GiftCard";
import { Card } from "semantic-ui-react";

function GiftList({ gifts }) {
  const giftsToDisplay = gifts.map((gift) => (
    <GiftCard key={gift.id} gift={gift} />
  ));

  return (
    <Card.Group centered itemsPerRow={4}>
      {giftsToDisplay}
    </Card.Group>
  );
}

export default GiftList;
