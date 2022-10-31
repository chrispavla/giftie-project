import React, { useState, useContext } from "react";
import NewWishListForm from "./NewWishlistForm";
import WishlistList from "./WishlistList";
import { WishlistsContext } from "../Context/WishlistsProvider";

function MyProfile() {
  let [wishlists, setWishlists] = useContext(WishlistsContext);

  return (
    <div>
      <h1 className="myprofilename">My Profile</h1>
      <p className="numberofwishlists">{wishlists.length} Wishlists</p>
      <WishlistList />
    </div>
  );
}

export default MyProfile;
