import React from "react";
import { useState, useContext } from "react";
import WishlistCard from "./WishlistCard";
import NewWishListForm from "./NewWishlistForm";
import { WishlistsContext } from "../Context/WishlistsProvider";

function WishlistList() {
  const [isShown, setIsShown] = useState(false);
  let [wishlists, setWishlists] = useContext(WishlistsContext);

  function submitNewWishlist(newWishlistObj) {
    setWishlists([...wishlists, newWishlistObj]);
  }

  function handleOpenNewWishlistForm() {
    setIsShown(true);
  }

  return (
    <div className="wishlistcard">
      {wishlists.length > 0
        ? wishlists.map((wishlist) => (
            <WishlistCard key={wishlist.id} wishlist={wishlist} />
          ))
        : "Loading.."}

      <button className="button" onClick={handleOpenNewWishlistForm}>
        + New Wish List
      </button>
      {isShown && (
        <NewWishListForm
          setIsShown={setIsShown}
          submitNewWishlist={submitNewWishlist}
        />
      )}
    </div>
  );
}

export default WishlistList;
