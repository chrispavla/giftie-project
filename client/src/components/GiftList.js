import React from "react";
import GiftCard from "./GiftCard";

function GiftList({ gifts }) {
  const giftsToDisplay = gifts.map((gift) => (
    <GiftCard key={gift.id} gift={gift} />
  ));

  return <div>{giftsToDisplay}</div>;
}

export default GiftList;
