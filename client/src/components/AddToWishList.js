import React, { useState } from "react";

function AddToWishList({ gift, wishlists }) {
  const [foundWishlist, setFoundWishlist] = useState([]);

  function handleChangeWishlists(e) {
    let foundWishlist = wishlists.find(
      (wishlist) => wishlist.title === e.target.value
    );
    setFoundWishlist(foundWishlist);
  }

  function handleSaveGiftToSelectedWishlist() {
    // take the gift and assign it to the found wishlist
  }

  return (
    <div>
      <h1>Add to wishlist</h1>
      <h3>{gift.gift_name}</h3>
      <select onChange={(e) => handleChangeWishlists(e)}>
        <option value="Select Wishlist">Select Wishlist</option>
        {wishlists.map((wishlist) => (
          <option value={wishlist.title}>{wishlist.title}</option>
        ))}
      </select>
      <button onClick={handleSaveGiftToSelectedWishlist}>Save Gift</button>
    </div>
  );
}

export default AddToWishList;
