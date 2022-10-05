import React from "react";
import SavedGiftCard from "./SavedGiftCard";

function SavedGiftList({ wishlistSavedGifts }) {
  const wishlistSavedGiftsToDisplay = wishlistSavedGifts.map(
    (wishlistSavedGift) => (
      <SavedGiftCard
        key={wishlistSavedGift.id}
        wishlistSavedGift={wishlistSavedGift}
      />
    )
  );

  return <div>{wishlistSavedGiftsToDisplay}</div>;
}

export default SavedGiftList;
