import React from "react";
import { Link } from "react-router-dom";
import GiftImage from "../gift_image.jpg";

function SavedGiftCard({ wishlistSavedGift }) {
  return (
    <div class="col">
      <div class="card h-100">
        <Link className="link" to={`/saved_gifts/${wishlistSavedGift.id}`}>
          {wishlistSavedGift.image_url ? (
            <img class="card-img-top" src={wishlistSavedGift.image_url} />
          ) : (
            <img class="card-img-top" src={GiftImage} />
          )}
        </Link>
        <div class="card-body">
          <h5 class="card-title">{wishlistSavedGift.gift_name}</h5>
        </div>
        <div class="card-footer">
          <p>$ {wishlistSavedGift.price}</p>
        </div>
      </div>
    </div>
  );
}

export default SavedGiftCard;
