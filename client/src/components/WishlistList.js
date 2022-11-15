import React from "react";
import { useContext } from "react";
import WishlistCard from "./WishlistCard";
import NewWishListForm from "./NewWishlistForm";
import { WishlistsContext } from "../Context/WishlistsProvider";
import { Card } from "semantic-ui-react";

function WishlistList() {
  let [wishlists, setWishlists] = useContext(WishlistsContext);

  function submitNewWishlist(newWishlistObj) {
    setWishlists([...wishlists, newWishlistObj]);
  }

  return (
    <>
      <Card.Group centered itemsPerRow={4}>
        {wishlists.length > 0
          ? wishlists.map((wishlist) => (
              <WishlistCard key={wishlist.id} wishlist={wishlist} />
            ))
          : "No wishlists yet. Click below to create one!"}
      </Card.Group>
      <NewWishListForm submitNewWishlist={submitNewWishlist} />
    </>
  );
}

export default WishlistList;
