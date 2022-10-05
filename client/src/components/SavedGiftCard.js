import React from "react";
import { Link } from "react-router-dom";
import GiftImage from "../gift_image.jpg";

function SavedGiftCard({ wishlistSavedGift }) {
  return (
    <div>
      <Link className="link" to={`/saved_gifts/${wishlistSavedGift.id}`}>
        <h3>{wishlistSavedGift.gift_name}</h3>
        <h4>${wishlistSavedGift.price}</h4>
        {wishlistSavedGift.image_url ? (
          <img src={wishlistSavedGift.image_url} />
        ) : (
          <img src={GiftImage} />
        )}
      </Link>
    </div>
  );
}

export default SavedGiftCard;
