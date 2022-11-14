import React from "react";
import SavedGiftCard from "./SavedGiftCard";
import { Card } from "semantic-ui-react";

function SavedGiftList({ wishlistSavedGifts }) {
  const wishlistSavedGiftsToDisplay = wishlistSavedGifts.map(
    (wishlistSavedGift) => (
      <SavedGiftCard
        key={wishlistSavedGift.id}
        wishlistSavedGift={wishlistSavedGift}
      />
    )
  );

  return (
    <Card.Group style={{ marginTop: "20px" }} centered itemsPerRow={4}>
      {wishlistSavedGiftsToDisplay}
    </Card.Group>
  );
}

export default SavedGiftList;
