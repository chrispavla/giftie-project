import React, { useEffect, useState } from "react";
import NewWishListForm from "./NewWishlistForm";
import WishlistList from "./WishlistList";

function MyProfile({ submitNewWishlist, wishlists }) {
  const [isShown, setIsShown] = useState(false);

  function handleOpenNewWishlistForm() {
    setIsShown(true);
  }

  return (
    <div>
      <h1>My Profile</h1>
      <WishlistList wishlists={wishlists} />
      <button onClick={handleOpenNewWishlistForm}>+ New Wish List</button>
      {isShown && (
        <NewWishListForm
          setIsShown={setIsShown}
          submitNewWishlist={submitNewWishlist}
        />
      )}
    </div>
  );
}

export default MyProfile;
