import React, { useState } from "react";

function AddToWishList({ gift, wishlists, updateGifts }) {
  const [foundWishlist, setFoundWishlist] = useState([]);

  function handleChangeWishlists(e) {
    let foundWishlist = wishlists.find(
      (wishlist) => wishlist.title === e.target.value
    );
    setFoundWishlist(foundWishlist);
  }

  function handleSaveGiftToSelectedWishlist() {
    // take the gift and assign it to the found wishlist
    // make a patch request to the gift and change its wishlist_id to the current one
    fetch(`/gifts/${gift.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        wish_list_id: foundWishlist.id,
      }),
    })
      .then((res) => res.json())
      .then((gift) => updateGifts(gift));
    alert("Gift saved to your wishlist!");
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
