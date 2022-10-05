import React from "react";
import { Link } from "react-router-dom";

function WishlistCard({ wishlist }) {
  return (
    <div>
      <Link className="link" to={`/wish_lists/${wishlist.id}`}>
        <h3>{wishlist.title}</h3>
        <p>{wishlist.gifts.length} gifts</p>
      </Link>
    </div>
  );
}

export default WishlistCard;
