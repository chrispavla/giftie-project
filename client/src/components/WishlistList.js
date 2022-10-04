import React from "react";
import WishlistCard from "./WishlistCard";

function WishlistList({ wishlists }) {
  const wishlistsToDisplay = wishlists.map((wishlist) => (
    <WishlistCard key={wishlist.id} wishlist={wishlist} />
  ));

  return <div>{wishlistsToDisplay}</div>;
}

export default WishlistList;
