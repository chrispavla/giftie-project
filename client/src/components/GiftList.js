import React from "react";
import GiftCard from "./GiftCard";

function GiftList({ gifts }) {
  const giftsToDisplay = gifts.map((gift) => (
    <GiftCard key={gift.id} gift={gift} />
  ));

  return <div class="row row-cols-3 row-cols-md-4 g-4">{giftsToDisplay}</div>;
}

export default GiftList;
