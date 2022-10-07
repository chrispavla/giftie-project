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

  return (
    <div class="row row-cols-3 row-cols-md-4 g-4">
      {wishlistSavedGiftsToDisplay}
    </div>
  );
}

export default SavedGiftList;
