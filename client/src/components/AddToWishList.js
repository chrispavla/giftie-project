import React, { useEffect, useState } from "react";

function AddToWishList({ gift, wishlists, user, isShown, setIsShown }) {
  const [foundWishlist, setFoundWishlist] = useState([]);
  const [details, setDetails] = useState([null]);

  useEffect(() => {
    fetch(`/gifts/${gift.id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  function handleChangeWishlists(e) {
    let foundWishlist = wishlists.find(
      (wishlist) => wishlist.title === e.target.value
    );
    setFoundWishlist(foundWishlist);
  }

  function handleSaveGiftToSelectedWishlist() {
    fetch("/saved_gifts/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        gift_name: details.gift_name,
        description: details.description,
        tags: details.tags,
        price: details.price,
        quantity: details.quantity,
        link_url: details.link_url,
        image_url: details.image_url,
        user_id: user.id,
        wish_list_id: foundWishlist.id,
      }),
    })
      .then((res) => res.json())
      .then((gift) => console.log(gift));
    alert("Gift saved to your wishlist!");
    setIsShown(!isShown);
  }

  return (
    <div>
      <button
        className="savegiftbutton"
        onClick={handleSaveGiftToSelectedWishlist}
      >
        Save Gift
      </button>
      <select
        className="selectwishlist"
        onChange={(e) => handleChangeWishlists(e)}
      >
        <option value="Select Wishlist">Select Wishlist</option>
        {wishlists.map((wishlist) => (
          <option key={wishlist.id} value={wishlist.title}>
            {wishlist.title}
          </option>
        ))}
      </select>
    </div>
  );
}

export default AddToWishList;
