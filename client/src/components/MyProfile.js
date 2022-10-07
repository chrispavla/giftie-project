import React, { useEffect, useState } from "react";
import NewWishListForm from "./NewWishlistForm";
import WishlistList from "./WishlistList";

function MyProfile({ submitNewWishlist, wishlists, user }) {
  const [isShown, setIsShown] = useState(false);

  function handleOpenNewWishlistForm() {
    setIsShown(true);
  }

  return (
    <div>
      <h1 className="myprofilename">My Profile</h1>
      <p className="numberofwishlists">{wishlists.length} Wishlists</p>
      <WishlistList wishlists={wishlists} />
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

export default MyProfile;
